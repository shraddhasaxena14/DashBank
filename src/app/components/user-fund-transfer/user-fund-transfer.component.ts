import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FundTransfer } from 'src/app/shared/models/fundtransfer.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-fund-transfer',
  templateUrl: './user-fund-transfer.component.html',
  styleUrls: ['./user-fund-transfer.component.css']
})
export class UserFundTransferComponent implements OnInit {

  constructor(public fundtype:UserService) { }

  ngOnInit(): void {
  }

  fund: FundTransfer;

  

}
