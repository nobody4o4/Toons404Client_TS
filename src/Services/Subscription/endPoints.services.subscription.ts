// import { series } from "@/types";
import { KhaltiCallBack } from "@/types";
import {url} from "../index/index.services";


// const planId = "b14b54ca-47a3-499a-84d4-a04d32a94ecf";
export function createSubscriptionurl(planId : string) {
  return url.post(`/subscription/add/${planId}` );
}

export function ConfirmSubscriptionUrl(paymentDetails : KhaltiCallBack){
  return url.post(`/subscription/callback`, { params: paymentDetails });
}

export function getSubscriptionByIdurl( ){
  return url.get(`/subscription/get`,);
}

 