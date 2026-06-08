-- Run this in Supabase SQL Editor
-- Creates the portfolio_wallets table for Pro users

CREATE TABLE IF NOT EXISTS portfolio_wallets (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  wallet_address text NOT NULL,
  nickname text,
  chain text NOT NULL DEFAULT 'evm', -- 'evm' | 'solana'
  created_at timestamptz DEFAULT now() NOT NULL,
  UNIQUE(user_id, wallet_address)
);

-- Row Level Security
ALTER TABLE portfolio_wallets ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own wallets"
  ON portfolio_wallets FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own wallets"
  ON portfolio_wallets FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own wallets"
  ON portfolio_wallets FOR DELETE
  USING (auth.uid() = user_id);

-- Index for fast lookups
CREATE INDEX IF NOT EXISTS idx_portfolio_wallets_user_id ON portfolio_wallets(user_id);
