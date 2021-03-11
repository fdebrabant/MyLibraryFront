export class Book {
    public id!: number;
    public name!: string;
    public synopsis!: string;
    public author_id!: number;
    public image!: string;

    constructor(
        id: number,
        name: string, 
        synopsis: string, 
        author_id: number, 
        image: string
    ) {
        this.id = id;
        this.name = name;
        this.synopsis = synopsis;
        this.author_id = author_id;
        this.image = image;
    }
}