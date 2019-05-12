import { expect } from 'chai';
import { suggest } from './suggest';
import { wordListToTrie } from './Trie';

const loggingOn = false;

const consoleLog = loggingOn ? console.log : () => {};

describe('test building tries', () => {
    it('build', () => {
        const words = [
            'apple', 'ape', 'able', 'apple', 'banana', 'orange', 'pear', 'aim', 'approach'
        ];
        const trie = wordListToTrie(words);
        expect(trie).to.not.be.null;
    });
});

/* */

describe('test suggestions', () => {
    const words = [
        'apple', 'ape', 'able', 'apples', 'banana', 'orange', 'pear', 'aim', 'approach', 'bear'
    ];

    const trie = wordListToTrie(words);

    it('tests matches aple', () => {
        const results = suggest(trie, 'aple');
        const suggestions = results.map(({word}) => word);
        expect(results).to.not.be.null;
        expect(suggestions).to.contain('apple');
        expect(suggestions).to.contain('ape');
        expect(suggestions).to.not.contain('banana');
    });

    it('tests matches approch', () => {
        const results = suggest(trie, 'approch');
        const suggestions = results.map(({word}) => word);
        expect(suggestions).to.not.contain('apple');
        expect(suggestions).to.contain('approach');
        expect(suggestions).to.not.contain('banana');
    });


    it('tests matches ear', () => {
        const results = suggest(trie, 'ear');
        const suggestions = results.map(({word}) => word);
        expect(suggestions).to.not.contain('apple');
        expect(suggestions).to.contain('pear');
        expect(suggestions).to.contain('bear');
    });
});

describe('matching hte', () => {
    const words = [
        'ate', 'hoe', 'hot', 'the', 'how', 'toe'
    ];

    const trie = wordListToTrie(words);

    it('checks best match', () => {
        const results = suggest(trie, 'hte');
        consoleLog(JSON.stringify(results, null, 4));
    });
});

describe('test for duplicate suggestions', () => {
    const words = [
        'apple', 'ape', 'able', 'apples', 'banana', 'orange', 'pear', 'aim', 'approach', 'bear'
    ];

    it('tests ', () => {
        const word = 'beaet';
        const expectWord = 'beeeet';
        const extraWords = [ expectWord ];
        const trie = wordListToTrie([...words, ...extraWords]);
        const results = suggest(trie, word);
        const suggestions = results.map(({word}) => word);
        consoleLog(suggestions);
        expect(results).to.not.be.null;
        expect(suggestions).to.contain(expectWord);
    });
});

