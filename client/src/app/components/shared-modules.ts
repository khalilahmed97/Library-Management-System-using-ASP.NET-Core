import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCard, MatCardContent, MatCardActions,MatCardHeader } from '@angular/material/card';
import { MatList, MatListItem } from '@angular/material/list';
import {MatGridListModule, MatGridTile} from '@angular/material/grid-list';
import {MatFormFieldModule ,MatLabel} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations:[],
    imports:[
        ReactiveFormsModule,
        MatList,
        MatListItem,
        MatInputModule,
        MatCard,
        MatFormFieldModule,
        MatLabel,
        MatCardContent,
        MatCardActions, 
        MatCardHeader,
        MatGridTile,
        MatGridListModule,
        MatIconModule,
        MatExpansionModule,
        MatTableModule,
        CommonModule,

    ],
    exports:[
        ReactiveFormsModule,
        MatList,
        MatListItem,
        MatInputModule,
        MatCard,
        MatFormFieldModule,
        MatLabel,
        MatCardContent,
        MatCardActions, 
        MatCardHeader,
        MatGridTile,
        MatGridListModule,
        MatIconModule,
        MatExpansionModule,
        MatTableModule,
        CommonModule,

    ],
})

export class SharedModule{

}