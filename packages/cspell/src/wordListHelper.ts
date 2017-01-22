// cSpell:enableCompoundWords
import * as Rx from 'rxjs/Rx';
import * as Text from './util/text';
import { lineReader } from './util/fileReader';
import * as XRegExp from 'xregexp';


const regExpWordsWithSpaces = XRegExp('^\\s*\\p{L}+(?:\\s+\\p{L}+){0,3}$');

export interface WordDictionary {
    [index: string]: boolean;
}

export type WordSet = Set<string>;

export function loadWordsRx(filename: string): Rx.Observable<string> {
    return lineReader(filename).catch((e: any) => {
        logError(e);
        return Rx.Observable.from<string>([]);
    });
}

function logError(e: any) {
    console.log(e);
}

export function splitLine(line: string) {
    return Text.extractWordsFromText(line).map(({word}) => word).toArray();
}

export function splitCodeWords(words: string[]) {
    return words
        .map(Text.splitCamelCaseWord)
        .reduce((a, b) => a.concat(b), []);
}

export function splitLineIntoCodeWordsRx(line: string): Rx.Observable<string> {
    const asMultiWord = regExpWordsWithSpaces.test(line) ? [ line ] : [];
    const asWords = splitLine(line);
    const splitWords = splitCodeWords(asWords);
    const wordsToAdd = [...asMultiWord, ...asWords, ...splitWords];
    return Rx.Observable.from(wordsToAdd);
}

export function splitLineIntoWordsRx(line: string): Rx.Observable<string> {
    const asWords = splitLine(line);
    const wordsToAdd = [line, ...asWords];
    return Rx.Observable.from(wordsToAdd);
}


export function rxSplitIntoWords(lines: Rx.Observable<string>): Rx.Observable<string> {
    return lines.flatMap(line =>
        Text.extractWordsFromTextRx(line)
            .map(match => match.word)
            .map(w => w.trim())
            .filter(w => w !== '')
    );
}


export function rxSplitCamelCaseWords(words: Rx.Observable<string>): Rx.Observable<string> {
    return words.flatMap(word => Text.splitCamelCaseWord(word));
}


