var Person = function(firstAndLast) {
      // Complete the method below and implement the others similarly
      let  firstName, lastName;

       let splitted = function(fullName){
          fullName = fullName.split(' ');
          firstName = fullName[0];
          lastName = fullName[1];
          return firstName,lastName;
      }
      splitted(firstAndLast);
   
    

      this.getFullName = function() {

        let  firstAndLast =  firstName+ " " +lastName;
        return firstAndLast;
      };

      this.getFirstName = function() {
            return firstName;
      }
  
      this.getLastName = function() {
            return lastName;
      }

      this.setFullName= function (firstAndLast) {
            splitted(firstAndLast);
      }
      this.setFirstName = function(first){
            firstName=first;
      }
      this.setLastName = function(last){
            lastName=last;
      }



};
    
    var bob = new Person('Bob Ross');
    console.log(Object.keys(bob).length);
    bob.getFullName();
    bob.setFirstName('abdurrahman');
    console.log(bob.getLastName());
    console.log(bob.getFirstName());