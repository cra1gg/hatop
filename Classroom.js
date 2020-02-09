class Classroom {
   constructor() {

   }

   set joinCode() {
       this._joinCode = Math.random().toString(36).substr(2, 8);
   }
}