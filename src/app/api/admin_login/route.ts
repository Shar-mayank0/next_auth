import { dbConnect } from "@/dbConfig/dbConfig";
import admin from "@/models/adminInfo";
import { NextApiRequest, NextApiResponse } from "next";
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

