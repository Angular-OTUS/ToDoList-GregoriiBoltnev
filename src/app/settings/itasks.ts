export interface ITasks {
  id: number,
  title: string,
  description?:string,
  selected?:boolean,
  status: {
    completed: boolean,
    inProgress: boolean,
  }
}
