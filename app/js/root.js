import jquery from 'jquery';

class Hello {
  sayTo(name) {
    alert(`Hello, ${name}`);
  }
}

const hello = new Hello();
hello.sayTo('Tasya');
