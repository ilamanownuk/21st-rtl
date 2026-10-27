"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wallet, TrendingUp, Eye, RefreshCw, ArrowDown, ArrowUp, ArrowLeftRight, Clock, Bitcoin } from "lucide-react"

export type WalletCardProps = {
  /** Balance of the pink "Funding" account. */
  fundingBalance?: string
  /** Balance of the purple "Unified Trading" account. */
  tradingBalance?: string
  /** The large total in the middle. */
  totalBalance?: string
  /** Line under the total, e.g. the total in BTC. */
  cryptoBalance?: string
  onDeposit?: () => void
  onWithdraw?: () => void
  onTransfer?: () => void
  onHistory?: () => void
  onRefresh?: () => void
  className?: string
}

export default function WalletCard({
  fundingBalance = "$243,940.03",
  tradingBalance = "$310,495.50",
  totalBalance = "$534,435.53",
  cryptoBalance = "9.300554 BTC",
  onDeposit,
  onWithdraw,
  onTransfer,
  onHistory,
  onRefresh,
  className = "",
}: WalletCardProps = {}) {
  return (
    <div className={`max-w-md mx-auto ${className}`}>
      <Card className="p-6 bg-white border border-gray-200 shadow-xl rounded-3xl">
        <div className="space-y-6">
          <div className="space-y-3">
            <Card className="p-4 bg-gradient-to-r from-pink-200 to-rose-200 border border-pink-300/50 shadow-sm rounded-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-black/10 rounded-lg flex items-center justify-center">
                    <Wallet className="w-4 h-4 text-gray-700" />
                  </div>
                  <span className="font-medium text-gray-800">Funding</span>
                </div>
                <span className="font-semibold text-gray-800">{fundingBalance}</span>
              </div>
            </Card>

            <Card className="p-4 bg-gradient-to-r from-purple-200 to-indigo-200 border border-purple-300/50 shadow-sm rounded-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-black/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-gray-700" />
                  </div>
                  <span className="font-medium text-gray-800">Unified Trading</span>
                </div>
                <span className="font-semibold text-gray-800">{tradingBalance}</span>
              </div>
            </Card>
          </div>

          <div className="space-y-4 py-6 px-2 border border-gray-100 rounded-2xl bg-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-gray-400 rounded-full" />
                </div>
                <span className="text-gray-600 font-medium">Total Balance</span>
                <Eye className="w-4 h-4 text-gray-400" />
              </div>
              <button type="button" onClick={onRefresh} aria-label="Refresh" className="rounded-md">
                <RefreshCw className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <div className="space-y-2">
              <div className="text-4xl font-bold text-gray-900">{totalBalance}</div>
              <div className="flex items-center gap-2 text-orange-500">
                <Bitcoin className="w-4 h-4" />
                <span className="font-medium">{cryptoBalance}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button onClick={onDeposit} className="flex-1 bg-pink-500 hover:bg-pink-600 text-white rounded-2xl h-12 gap-2 border border-pink-600">
              <ArrowDown className="w-4 h-4" />
              Deposit
            </Button>
            <Button
              onClick={onWithdraw}
              variant="secondary"
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-2xl h-12 gap-2 border border-gray-300"
            >
              <ArrowUp className="w-4 h-4" />
              Withdraw
            </Button>
            <Button
              onClick={onTransfer}
              aria-label="Transfer"
              variant="secondary"
              size="icon"
              className="w-12 h-12 rounded-2xl bg-gray-200 hover:bg-gray-300 border border-gray-300"
            >
              <ArrowLeftRight className="w-4 h-4 text-gray-700" />
            </Button>
            <Button
              onClick={onHistory}
              aria-label="History"
              variant="secondary"
              size="icon"
              className="w-12 h-12 rounded-2xl bg-gray-200 hover:bg-gray-300 border border-gray-300"
            >
              <Clock className="w-4 h-4 text-gray-700" />
            </Button>
          </div>

          <div className="space-y-1 pt-2">
            <div className="flex items-center gap-4 p-3 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center border border-pink-200">
                <Wallet className="w-6 h-6 text-pink-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Funding Account</h3>
                <p className="text-sm text-gray-500">Manage your funding account</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center border border-purple-200">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Unified Trading Account</h3>
                <p className="text-sm text-gray-500">Manage your trading account</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
