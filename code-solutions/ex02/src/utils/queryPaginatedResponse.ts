import { Object as ContractObject, Property } from 'fabric-contract-api';
import { State } from '../ledger-api/state';
// Query Response as container for Query result with Pagination option
/*
The container define attributes for fetched rocord count and bookmark that can be used to return the next result
*/

export class QueryPaginationResponse  <T extends State>
{
    public value: T[];
    fetched_records_count :number;
    bookmark:string;
   
    constructor(fetched_records_count: number, bookmark: string) {
        this.fetched_records_count = fetched_records_count;
        this.bookmark = bookmark;
       
    }

}