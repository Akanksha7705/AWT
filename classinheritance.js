class ABC{
    ssa(a=5){
        this.a=a
    }

}

class XYZ extends ABC{
    ssd(a,b){
        super(a)
        this.b=b
    }
}

var aaa=new XYZ(2,4)
console.log(aaa.a)
console.log(aaa.b)