export class Recipe{
   public name:string;
   public description:String;
   public imagePath:string;
// ------------------------------------------------------------------------------------------------
constructor(name:string,imagePath:string,desc:String){  
this.name=name;
this.description=desc;
this.imagePath=imagePath;
   }
}