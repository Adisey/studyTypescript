type IType = string;
type IHandler = (fun: void) => void;
// ------------ Event ------------
type IEvent = {
    type?: IType;
    timeStamp?: Date;
    new (IEvent): void;
};
type IArgs = IEvent[];

interface IEventParams {
    type?: IType;
    timeStamp?: Date;
}

function MyEvent(params: IEventParams): void {
    this.type = params.type;
    this.timeStamp = new Date();
    return this;
}

// ------------ Emitter ------------

type IEmitterClean = () => void;
type IEmitterPropsType = (type: IType) => void;
type IEmitterPropsTypeHandler = (type: IType, handler: IHandler) => void;
type IEmitterEventParamsArgs = (event: IEventParams, args: IArgs) => void;
type IEmitterEventArgs = (event: IEvent, args: IArgs) => void;

interface IEmitterInterface {
    on?: IEmitterPropsTypeHandler;
    off?: IEmitterPropsTypeHandler;
    trigger?: IEmitterEventParamsArgs;
    _dispatch?: IEmitterEventArgs;
    _offByHandler?: IEmitterPropsTypeHandler;
    _offByType?: IEmitterPropsType;
    _offAll?: IEmitterClean;
}

const emitter: IEmitterInterface = {};

function Emitter(): void {
    const e = Object.create(emitter);
    e.events = {};
    return e;
}

emitter.on = function (type, handler) {
    if (this.events.hasOwnProperty(type)) {
        this.events[type].push(handler);
    } else {
        this.events[type] = [handler];
    }
    return this;
};
emitter.off = function (type, handler) {
    if (arguments.length === 0) {
        return this._offAll();
    }
    if (handler === undefined) {
        return this._offByType(type);
    }
    return this._offByHandler(type, handler);
};
emitter.trigger = function (event, args) {
    if (!(event instanceof MyEvent)) {
        event = new MyEvent(event);
    }
    return this._dispatch(event, args);
};
emitter._dispatch = function (event, args) {
    if (!this.events.hasOwnProperty(event.type)) return;
    args = args || [];
    args.unshift(event);

    const handlers = this.events[event.type] || [];
    handlers.forEach((handler) => handler.apply(null, args));
    return this;
};
emitter._offByHandler = function (type, handler) {
    if (!this.events.hasOwnProperty(type)) return;
    const i = this.events[type].indexOf(handler);
    if (i > -1) {
        this.events[type].splice(i, 1);
    }
    return this;
};
emitter._offByType = function (type) {
    if (this.events.hasOwnProperty(type)) {
        delete this.events[type];
    }
    return this;
};

emitter._offAll = function () {
    this.events = {};
    return this;
};

Emitter.Event = MyEvent;

Emitter.mixin = function (obj, arr) {
    const emitter = new Emitter();
    arr.map(function (name) {
        obj[name] = function () {
            return emitter[name].apply(emitter, arguments);
        };
    });
};

// ------------ Test ------------

const aa = new MyEvent({ type: '333' });
console.log(+new Date(), '-()->', typeof aa, `-aa->`, aa);

const emitter1 = new Emitter();
emitter1.on('11', (a) => console.log('11->', a));
emitter1.on('22', (b, c) => console.log('22->', b + c));
emitter1.on('33', (d) => console.log('33->', d));
console.log(+new Date(), '-(after on)->', typeof emitter1, `-emitter1->`, emitter1);

emitter1.off(11);
console.log(+new Date(), '-(after off)->', typeof emitter1, `-emitter1->`, emitter1);

const emitter2 = new Emitter();
emitter2.on('44', (a) => console.log('44->', a));
console.log(+new Date(), '-(emitter2)->', typeof emitter2, `-emitter2->`, emitter2);

emitter1._offAll();
console.log(+new Date(), '-(After _offAll)->', typeof emitter1, `-emitter1->`, emitter1);
