class MyClass {
    static instance: MyClass;
    private constructor(){}

    static getInstance(): MyClass{
        this.instance = this.instance || new MyClass();
        return this.instance
    }
}

// 두객체가 같은지 검사 
let foo = MyClass.getInstance();
console.log(`isSingleton : ${foo === MyClass.getInstance()}`);
