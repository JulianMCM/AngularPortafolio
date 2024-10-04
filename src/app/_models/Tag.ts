export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');
    static readonly PYTHON = new Tag('Python', 'pink');
    static readonly EXPRESSJS = new Tag('ExpressJs', 'green');
    static readonly JAVA = new Tag('Java', 'orange');
    static readonly NODEJS = new Tag('Node.JS', 'brown');
    static readonly BOOTSTRAP = new Tag('Bootstrap', 'purple');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'Orange');
    static readonly REACT = new Tag('React', 'blue');
    static readonly MONGODB = new Tag('MongoDB', 'darkgreen');

    private constructor(private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key;
    }
}