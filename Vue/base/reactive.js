// Vue.js internally uses Object.defineProperty to make objects reactive

const obj = {
    message: 'Hello, Vue!'
  };
console.log(obj)
  Object.defineProperty(obj, 'message', {
    get() {
      console.log('Getting message');
      return this._message;
    },
    set(newValue) {
      console.log('Setting message:', newValue);
      this._message = newValue;
      // Trigger update here (e.g., notify Vue's watcher)
    }
  });
  
  obj.message; // Output: Getting message
  obj.message = 'World'; // Output: Setting message: World