type status = {
  inProgress:boolean,
  completed:boolean
}

export interface ITasks {
  id: number,
  text: string,
  description?:string,
  selected?:boolean,
  status?: status
}
