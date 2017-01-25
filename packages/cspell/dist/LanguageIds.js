/**
 * This file was constructed from:
 * ```
 * cd ~/projects/clones/vscode/extensions
 * find . -type f -iname package.json -exec pcregrep -M '(?:"id":.*)|(?:"extensions":[^\]]+)' {} \; > ~/projects/cspell/src/languageIds.txt`
 * ```
 */
"use strict";
exports.languageExtensionDefinitions = [
    {
        'id': 'bat',
        'extensions': ['.bat', '.cmd'],
    },
    {
        'id': 'clojure',
        'extensions': ['.clj', '.cljs', '.cljx', '.clojure', '.edn'],
    },
    {
        'id': 'coffeescript',
        'extensions': ['.coffee', '.cson'],
    },
    {
        'id': 'c',
        'extensions': ['.c'],
    },
    {
        'id': 'cpp',
        'extensions': ['.cpp', '.cc', '.cxx', '.hpp', '.hh', '.hxx', '.h', '.mm', '.ino', '.inl'],
    },
    {
        'id': 'csharp',
        'extensions': ['.cs'],
    },
    {
        'id': 'css',
        'extensions': ['.css'],
    },
    {
        'id': 'diff',
        'extensions': ['.diff', '.patch', '.rej'],
    },
    {
        'id': 'dockerfile',
        'extensions': ['.dockerfile'],
    },
    {
        'id': 'fsharp',
        'extensions': ['.fs', '.fsi', '.fsx', '.fsscript'],
    },
    {
        'id': 'go',
        'extensions': ['.go'],
    },
    {
        'id': 'groovy',
        'extensions': ['.groovy', '.gvy', '.gradle'],
    },
    {
        'id': 'handlebars',
        'extensions': ['.handlebars', '.hbs'],
    },
    {
        'id': 'html',
        'extensions': [
            '.html',
            '.htm',
            '.shtml',
            '.xhtml',
            '.mdoc',
            '.jsp',
            '.asp',
            '.aspx',
            '.jshtm',
            '.volt',
            '.vue'
        ],
    },
    {
        'id': 'ini',
        'extensions': ['.ini'],
    },
    {
        'id': 'properties',
        'extensions': ['.properties', '.gitconfig', '.cfg', '.conf'],
    },
    {
        'id': 'jade',
        'extensions': ['.jade', '.pug'],
    },
    {
        'id': 'java',
        'extensions': ['.java', '.jav'],
    },
    {
        'id': 'javascriptreact',
        'extensions': ['.jsx'],
    },
    {
        'id': 'javascript',
        'extensions': ['.js', '.es6'],
    },
    {
        'id': 'json',
        'extensions': [
            '.json',
            '.bowerrc',
            '.jshintrc',
            '.jscsrc',
            '.eslintrc',
            '.babelrc',
            '.webmanifest'
        ],
    },
    {
        'id': 'less',
        'extensions': ['.less'],
    },
    {
        'id': 'lua',
        'extensions': ['.lua'],
    },
    {
        'id': 'makefile',
        'extensions': ['.mk'],
    },
    {
        'id': 'markdown',
        'extensions': [
            '.md',
            '.mdown',
            '.markdown',
            '.markdn'
        ],
    },
    {
        'id': 'objective-c',
        'extensions': ['.m'],
    },
    {
        'id': 'perl',
        'extensions': ['.pl', '.pm', '.pod', '.t', '.PL', '.psgi'],
    },
    {
        'id': 'perl6',
        'extensions': ['.p6', '.pl6', '.pm6', '.nqp'],
    },
    {
        'id': 'php',
        'extensions': ['.php', '.php4', '.php5', '.phtml', '.ctp'],
    },
    {
        'id': 'powershell',
        'extensions': ['.ps1', '.psm1', '.psd1', '.pssc', '.psrc'],
    },
    {
        'id': 'python',
        'extensions': ['.py', '.rpy', '.pyw', '.cpy', '.gyp', '.gypi'],
    },
    {
        'id': 'r',
        'extensions': ['.r', '.rhistory', '.rprofile', '.rt'],
    },
    {
        'id': 'razor',
        'extensions': ['.cshtml'],
    },
    {
        'id': 'ruby',
        'extensions': ['.rb', '.rbx', '.rjs', '.gemspec', '.rake', '.ru'],
    },
    {
        'id': 'rust',
        'extensions': ['.rs'],
    },
    {
        'id': 'scss',
        'extensions': ['.scss'],
    },
    {
        'id': 'shaderlab',
        'extensions': ['.shader', '.cginc'],
    },
    {
        'id': 'shellscript',
        'extensions': [
            '.sh', '.bash', '.bashrc', '.bash_aliases', '.bash_profile',
            '.bash_login', '.ebuild', '.install', '.profile', '.bash_logout',
            '.zsh', '.zshrc', '.zprofile', '.zlogin', '.zlogout', '.zshenv', '.zsh-theme'
        ],
    },
    {
        'id': 'sql',
        'extensions': ['.sql', '.dsql'],
    },
    {
        'id': 'swift',
        'extensions': ['.swift'],
    },
    {
        'id': 'typescript',
        'extensions': ['.ts'],
    },
    {
        'id': 'typescriptreact',
        'extensions': ['.tsx'],
    },
    {
        'id': 'vb',
        'extensions': ['.vb', '.brs', '.vbs', '.bas'],
    },
    {
        'id': 'xml',
        'extensions': [
            '.xml',
            '.xsd',
            '.ascx',
            '.atom',
            '.axml',
            '.bpmn',
            '.config',
            '.cpt',
            '.csl',
            '.csproj',
            '.csproj.user',
            '.dita',
            '.ditamap',
            '.dtd',
            '.dtml',
            '.fsproj',
            '.fxml',
            '.iml',
            '.isml',
            '.jmx',
            '.launch',
            '.menu',
            '.mxml',
            '.nuspec',
            '.opml',
            '.owl',
            '.proj',
            '.pt',
            '.pubxml',
            '.pubxml.user',
            '.rdf',
            '.rng',
            '.rss',
            '.shproj',
            '.storyboard',
            '.svg',
            '.targets',
            '.tld',
            '.tmx',
            '.vbproj',
            '.vbproj.user',
            '.vcxproj',
            '.vcxproj.filters',
            '.wsdl',
            '.wxi',
            '.wxl',
            '.wxs',
            '.xaml',
            '.xbl',
            '.xib',
            '.xlf',
            '.xliff',
            '.xpdl',
            '.xul',
            '.xoml'
        ],
    },
    {
        'id': 'xsl',
        'extensions': ['.xsl', '.xslt'],
    },
    {
        'id': 'yaml',
        'extensions': ['.eyaml', '.eyml', '.yaml', '.yml'],
    },
];
exports.languageIds = exports.languageExtensionDefinitions.map(({ id }) => id);
let mapExtensionToLanguageIds;
function buildLanguageExtensionMap(defs) {
    return defs.reduce((map, def) => {
        def.extensions.forEach(ext => {
            map.set(ext, (map.get(ext) || new Set()).add(def.id));
        });
        return map;
    }, new Map());
}
exports.buildLanguageExtensionMap = buildLanguageExtensionMap;
function getLanguagesForExt(ext) {
    if (!mapExtensionToLanguageIds) {
        mapExtensionToLanguageIds = buildLanguageExtensionMap(exports.languageExtensionDefinitions);
    }
    const setOfLangs = mapExtensionToLanguageIds.get(ext);
    return (setOfLangs && [...setOfLangs]) || [];
}
exports.getLanguagesForExt = getLanguagesForExt;
//# sourceMappingURL=LanguageIds.js.map