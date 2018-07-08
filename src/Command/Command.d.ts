export class Component<P, S> {
    constructor(props: P, context?: any)

    props: Readonly<{ children?: {} }> & Readonly<P>;
    state: Readonly<S>;
}