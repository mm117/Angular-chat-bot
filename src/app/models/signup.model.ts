export  class SignUp {
   name: string;
   email: string;
   password: string;
   verifyPassword: string;
   constructor(name, email, password, verifyPassword) {
             this.name = name;
             this.email = email;
             this.password = password;
             this.verifyPassword = verifyPassword;
   }
}
