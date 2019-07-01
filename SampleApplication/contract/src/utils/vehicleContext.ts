import { Context, Contract } from 'fabric-contract-api';
import { Order } from '../assets/order';
import { Policy } from '../assets/policy';
import { Vehicle } from '../assets/vehicle';
import { OrderList } from '../lists/orderList';
import { PolicyList } from '../lists/policyList';
import { PriceList } from '../lists/priceList';
import { VehicleList } from '../lists/vehicleList';
import { Price } from './../assets/price';

export class VehicleContext extends Context {
    private orderList: OrderList<Order>;
    private policyList: PolicyList<Policy>;
    private priceList: PriceList<Price>;
    private vehicleList: VehicleList<Vehicle>;
    constructor() {
        super();

        this.orderList = new OrderList(this, [Order]);
        this.policyList = new PolicyList(this, [Policy]);
        this.vehicleList = new VehicleList(this, [Vehicle]);
        this.priceList = new PriceList(this, [Price]);
    }
    public getOrderList() {
        return this.orderList;
    }
    public getPolicyList() {
        return this.policyList;
    }
    public getVehicleList() {
        return this.vehicleList;
    }
    public getPriceList() {
        return this.priceList;
    }
}