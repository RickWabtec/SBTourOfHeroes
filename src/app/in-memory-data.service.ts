import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {"WO_Op_Id":126915,"Operation_Seq":10,"Operation_Desc":"WORK STATION 7A","Quantity":0,"Start_Time":"2020-08-19T10:30:19","End_Time":"2020-08-19T10:32:11","Op_Status":"Operation Completed","Internal_Name":"Completed","Username":"Gawlinski, Jeffrey F"},
      {"WO_Op_Id":126916,"Operation_Seq":20,"Operation_Desc":"WORK STATION 7","Quantity":0,"Start_Time":"2020-08-19T10:32:15","End_Time":"2020-08-19T10:32:18","Op_Status":"Operation Completed","Internal_Name":"Completed","Username":"Gawlinski, Jeffrey F"},
      {"WO_Op_Id":126917,"Operation_Seq":30,"Operation_Desc":"WORK STATION 7","Quantity":0,"Start_Time":"2020-08-19T10:32:23","End_Time":"2020-08-19T10:32:26","Op_Status":"Operation Completed","Internal_Name":"Completed","Username":"Gawlinski, Jeffrey F"},
      {"WO_Op_Id":126918,"Operation_Seq":40,"Operation_Desc":"FINAL ASM-GEN&ALT","Quantity":0,"Start_Time":"2020-08-19T10:53:28","End_Time":"2020-08-19T10:53:34","Op_Status":"Operation Completed","Internal_Name":"Completed","Username":"Gawlinski, Jeffrey F"},
      {"WO_Op_Id":126919,"Operation_Seq":50,"Operation_Desc":"COML TEST - BAY A","Quantity":0,"Start_Time":"2020-08-19T12:58:35","End_Time":"2020-08-19T13:20:17","Op_Status":"Operation Completed","Internal_Name":"Completed","Username":"Cambra, David"},
      {"WO_Op_Id":126920,"Operation_Seq":60,"Operation_Desc":"FINAL ASM-GEN&ALT","Quantity":0,"Start_Time":"2020-08-20T06:27:43","End_Time":"2020-08-20T06:27:48","Op_Status":"Operation Completed","Internal_Name":"Completed","Username":"Gawlinski, Jeffrey F"},
      {"WO_Op_Id":126921,"Operation_Seq":70,"Operation_Desc":"SPRAY PAINT BAY A","Quantity":0,"Start_Time":"2020-08-20T08:01:22","End_Time":"2020-08-20T08:08:06","Op_Status":"Operation Completed","Internal_Name":"Completed","Username":"Bevan, Brian W"},
      {"WO_Op_Id":126922,"Operation_Seq":80,"Operation_Desc":"SPRAY PAINT BAY A","Quantity":0,"Start_Time":"2020-08-20T08:08:12","End_Time":"2020-08-20T08:08:17","Op_Status":"Operation Completed","Internal_Name":"Completed","Username":"Bevan, Brian W"}];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.WO_Op_Id)) + 1 : 11;
  }
}