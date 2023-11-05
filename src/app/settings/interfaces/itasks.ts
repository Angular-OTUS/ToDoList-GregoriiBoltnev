export interface ITasks {
  id: number,
  text: string,
  description?:string,
  selected?:boolean,
  status?: {
    inProgress:boolean,
    completed:boolean
  }
}
