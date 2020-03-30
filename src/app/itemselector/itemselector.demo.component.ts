import { Component, OnInit } from '@angular/core'
@Component({
  selector: 'itemselector-demo',
  templateUrl: 'itemselector.demo.component.html'
})export class ItemselectorDemoComponent {
  htmlCode: string;
  JsonData: any;
  itemRef: any;
  selectedData: any;
  constructor() {
    this.JsonData =  {
  "data": [
    {
      "countryName": "Myanmar",
      "countryId": "024DD89E-0D48-445E-8B50-AF54F6CC77B8"
    },
    {
      "countryName": "Latvia",
      "countryId": "03640A86-304D-40C8-AC82-3EB8509DF8C4"
    },
    {
      "countryName": "Reunion",
      "countryId": "05F7CA1F-B4F7-4028-B9A8-75DEFE6BD5DF"
    },
    {
      "countryName": "Gabon",
      "countryId": "06AA5BEF-8040-43C0-AC33-AB37CE67A3ED"
    },
    {
      "countryName": "Guyana",
      "countryId": "06E22C7A-A41E-4C88-9ACA-75182FD29FF1"
    },
    {
      "countryName": "Tajikistan",
      "countryId": "0802FB31-367D-4DEA-8BA8-ACB1B2B413C4"
    },
    {
      "countryName": "Slovenia",
      "countryId": "0891E30B-6827-4F9A-B2A8-54DC981486A8"
    },
    {
      "countryName": "Martinique",
      "countryId": "0ADC41FF-1ABD-4C2C-950C-7D0C14F952B5"
    },
    {
      "countryName": "Puerto Rico",
      "countryId": "0ED62045-3943-4A95-9C7D-1EEC37DC7EBA"
    },
    {
      "countryName": "Niger",
      "countryId": "1168B245-04A7-429C-ABAF-28B04600BD56"
    },
    {
      "countryName": "Faroe Islands",
      "countryId": "12895F94-706E-41E6-896C-40FE6174EE16"
    },
    {
      "countryName": "Reunion",
      "countryId": "12E926C2-0FF8-4704-BBED-BDE08E262D95"
    },
    {
      "countryName": "Hong Kong",
      "countryId": "1571A3C5-6DB4-4ADD-A0CB-625AC4BD387E"
    },
    {
      "countryName": "Bhutan",
      "countryId": "163B5249-70EE-44F6-958F-7A44D3787380"
    },
    {
      "countryName": "Tokelau",
      "countryId": "171CF28F-D5D1-4F8A-B93E-8327552CE156"
    },
    {
      "countryName": "Saint Vincent and the Grenadines",
      "countryId": "487422EA-E66A-4BBA-9B40-2234739D49B2"
    },
    {
      "countryName": "Uganda",
      "countryId": "4A12F190-651D-48A7-87E8-6585072D7C34"
    }
  ]
}
  }
  getDropData(event: any) {
    this.itemRef.removeNode(event);
  }
  drag(data: any) {
    data.event.dataTransfer.setData("dragdata", JSON.stringify(data.data));
  }

  dragOver(event: any) {
    event.preventDefault();
  }

  drop(event: any) {
    event.preventDefault();
    console.log('event' +event);
    this.selectedData = JSON.parse(event.dataTransfer.getData('dragdata'))
  }

}