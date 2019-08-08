export class Property{

  propertyNumber:number
  propertyLocation:string=''
  PropertyType:string
  PropertyArea:string
  PropertyCost:string
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}