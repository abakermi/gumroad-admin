#!/usr/bin/env node
import { Command } from 'commander';
import axios from 'axios';
import 'dotenv/config';

const program = new Command();
const API_BASE = 'https://api.gumroad.com/v2';

function getClient() {
  const token = process.env.GUMROAD_ACCESS_TOKEN;
  if (!token) {
    console.error("❌ Error: GUMROAD_ACCESS_TOKEN is missing.");
    process.exit(1);
  }
  return axios.create({
    baseURL: API_BASE,
    params: { access_token: token }
  });
}

program
  .name('gumroad-admin')
  .description('Manage Gumroad store')
  .version('1.0.0');

program.command('products')
  .description('List all products')
  .action(async () => {
    try {
      const res = await getClient().get('/products');
      if (res.data.success) {
        console.log("📦 Products:");
        res.data.products.forEach((p: any) => {
          console.log(`- [${p.id}] ${p.name} ($${p.price/100}) - ${p.published ? '🟢' : '🔴'}`);
        });
      }
    } catch (error: any) {
      console.error("Error:", error.response?.data || error.message);
    }
  });

program.command('sales')
  .description('List recent sales')
  .action(async () => {
    try {
      const res = await getClient().get('/sales');
      if (res.data.success) {
        console.log("💰 Recent Sales:");
        res.data.sales.forEach((s: any) => {
          console.log(`- ${s.day_stamp}: $${s.price/100} (${s.product_name}) - ${s.email}`);
        });
      }
    } catch (error: any) {
      console.error("Error:", error.response?.data || error.message);
    }
  });

program.parse();
