//vehicleContext
import { Context, Contract } from 'fabric-contract-api';
import { Order } from '../assets/order';
import { Vehicle } from '../assets/vehicle';
import { OrderList } from '../lists/orderList';
import { VehicleList } from '../lists/vehicleList';
// Import the policy and policy list class to the vehicle context
// import { Policy } from '../assets/policy';
// import { PolicyList } from '../lists/policyList';

/* Custom Context that extend chain code Context class
 Used to define
A smart contract transaction context allows smart contracts to define and maintain user variables across transaction invocations
https://hyperledger-fabric.readthedocs.io/en/latest/developapps/transactioncontext.html
*/
export class VehicleContext extends Context {
    private orderList: OrderList<Order>;
    private vehicleList: VehicleList<Vehicle>;
    // Define policyList as list of policy objects
    // private policyList: PolicyList<Policy>; //add
    constructor() {
        super();
        this.orderList = new OrderList(this, [Order]);
        this.vehicleList = new VehicleList(this, [Vehicle]);
        // Create policy
        // this.policyList = new PolicyList(this, [Policy]);
    }

    public getOrderList(): OrderList<Order> {
        return this.orderList;
    }
    public getVehicleList(): VehicleList<Vehicle> {
        return this.vehicleList;
    }
    // Define the getPolicyList helper function
    // public getPolicyList(): PolicyList<Policy> {
    //     return this.policyList;
    // }
}