import { Router } from "express";
import { adaptExpressRoute as adapt } from '@/main/adapters'
import { makeLoadProductAllController } from "../factories/application/controllers";
import { PRODUCTS } from "@/utils/constants";

export default (route: Router): void => {
  route.get(`/${PRODUCTS}`, adapt(makeLoadProductAllController()))
}
