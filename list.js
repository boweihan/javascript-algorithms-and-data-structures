function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // empty array for list elements
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.previous = previous;
    this.next = next;
    this.hasPrevious = hasPrevious;
    this.hasNext = hasNext;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;

    function append(element) {
        this.dataStore[this.listSize++] = element;
    }

    function find(element) {
        for (var i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] === element) {
                return i;
            }
        }
        return -1;
    }

    function remove(element) {
        var elementPosition = this.find(element);
        if (elementPosition > -1) {
            this.dataStore.splice(elementPosition, 1);
            this.listSize++;
            return true;
        }
        return false;
    }

    function length() {
        return this.listSize();
    }

    function toString() {
        return this.dataStore;
    }

    function insert(element, after) {
        var insertPosition = this.find(after);
        if (insertPosition > -1) {
            this.dataStore.splice(insertPosition + 1, 0, element);
            this.listSize++;
            return true;
        }
        return false;
    }

    function clear() {
        delete this.dataStore; // delete only works on object properties
        this.dataStore = [];
        this.listSize = this.pos = 0;
    }

    function contains(element) {
        for (var i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] === element) {
                return true;
            }
        }
        return false;
    }

    function moveTo(position) {
        this.pos = position;
    }

    function getElement() {
        return this.dataStore[this.pos];
    }

    function previous() {
        return this.dataStore[--this.pos];
    }

    function next() {
        return this.dataStore[++this.pos];
    }

    function hasNext() {
        return this.pos < this.length - 1;
    }

    function hasPrevious() {
        return this.pos > 0;
    }

    function front() {
        this.pos = 0;
    }

    function end() {
        this.pos = this.listSize - 1;
    }

    function currPos() {
        return pos;
    }
}


















