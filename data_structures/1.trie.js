
let Node = function () {
    this.keys = new Map();
    this.end = false;
    this.setEnd = function () {
        this.end = true;
    };
    this.isEnd = function () {
        return this.end;
    };
}

let Trie = function () {
    this.root = new Node();

    this.add = function (word) {

        let currentNode = this.root;

        if (word.length == 0) {
            currentNode.setEnd;
        }
var i=0;
        for (i = 0; i < word.length; i++) {
           // console.log("letter = " + word[i])
            if (currentNode.keys.has(word[i])) {
                //console.log("letter exists, " + word[i] + ", isEnd= " + currentNode.isEnd());
                currentNode = currentNode.keys.get(word[i]);
/*                 if (i + 1 == word.length) {
                    currentNode.setEnd();
                } */
            } else {

                currentNode.keys.set(word[i], new Node());
                currentNode = currentNode.keys.get(word[i]);
/*                 if (i + 1 == word.length) {
                    console.log(word[i]);
                    currentNode.setEnd();
                } */
            }
        }
        currentNode.setEnd();
       // console.log(currentNode.keys.entries()+" = "+ currentNode.isEnd());
    }

    this.print = function () {
        let words = new Array();
        let search = function (node = this.root, string) {
            if (node.keys.size != 0) {
                for (let letter of node.keys.keys()) {
                    search(node.keys.get(letter), string.concat(letter));
                };
                if (node.isEnd()) {
                    words.push(string);
                };
            } else {
                string.length > 0 ? words.push(string) : undefined;
                return;
            };
        };
        search(this.root, new String());
        return words.length > 0 ? words : null;
    };

};

let trie = new Trie();
trie.add("santu");
trie.add("sandhu");
trie.add("tejo");
trie.add("perrier");

//console.log(trie.root.keys.entries());
console.log(trie.print());
