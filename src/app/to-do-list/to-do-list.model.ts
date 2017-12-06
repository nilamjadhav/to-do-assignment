export class Todo {
    public title: string;
    public desc: string;
    public status: boolean;
    public date: string;

    constructor(title: string, date: string, desc: string, status: boolean) {
        this.title = title;
        this.desc = desc;
        this.status = status;
        this.date = date;
    }
}