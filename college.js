class college{
    constructor(name,id){
        this.name=name;
        this.id=id;
    }
    marks(){
        console.log(`${this.name} scored 90 marks`);
    }
}

const stu = new college("ABC",67);

stu.marks();