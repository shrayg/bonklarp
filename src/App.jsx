import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog.jsx'
import { MoreHorizontal, Check, Zap } from 'lucide-react'
import './App.css'

function App() {
  const [showDialog, setShowDialog] = useState(false)

  const handleNavClick = (section) => {
    setShowDialog(true)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('logo')}>
            <img src="/bonk-logo.png" alt="Logo" className="w-16 h-18 rounded-full" />
          </div>

          {/* Navigation */}
        <nav className="flex items-center space-x-8">
          <button 
            onClick={() => handleNavClick('playbook')} 
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            Playbook
          </button>
          <button 
            onClick={() => handleNavClick('docs')}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            Docs
          </button>
          <button 
            onClick={() => handleNavClick('launch-coin')}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Launch Coin
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 py-12">
        {/* Token Profile Section */}
        <div className="text-center mb-12">
          {/* Token Avatar */}
          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-green-400 via-orange-400 to-green-600 flex items-center justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 via-orange-500 to-green-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
          </div>
          
          {/* Token Info */}
          <div className="mb-6">
            <div className="text-gray-500 text-sm mb-1">$TEST</div>
            <h1 className="text-3xl font-bold text-black mb-2">TEST</h1>
            <div className="flex items-center justify-center gap-2">
              <p className="text-gray-500 text-sm">@launchcoin + TEST https://t.co/lcTydTM8Ha</p>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-gray-500 text-sm mb-2">Market Cap</div>
            <div className="text-2xl font-bold text-black">$0</div>
          </div>
          <div className="text-center">
            <div className="text-gray-500 text-sm mb-2">Price</div>
            <div className="text-2xl font-bold text-black">$0.00000</div>
          </div>
          <div className="text-center">
            <div className="text-gray-500 text-sm mb-2">Creator Fees</div>
            <div className="text-2xl font-bold text-black">TBD</div>
          </div>
        </div>

        {/* Creator Section */}
        <div className="flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-green-400 via-orange-400 to-green-600 flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 via-orange-500 to-green-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">T</span>
              </div>
            </div>
            <div>
              <div className="text-gray-500 text-sm">Launched by</div>
              <div className="text-black font-semibold">@__chidz__</div>
            </div>
          </div>
          <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </div>
        </div>

        {/* View on DEX Button */}
        <div className="mb-12">
          <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg flex items-center justify-center gap-2">
            <Check className="w-5 h-5" />
            View on DEX
          </Button>
        </div>

        {/* Token Details */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-500">CA</span>
            <span className="text-black font-mono text-sm">3QpNCrdKREWfr6FCfiZphThsDUsz856vcH1cfiz3Dpsq</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Created</span>
            <span className="text-black">25d 22h 37m ago</span>
          </div>
        </div>
      </main>

      {/* Dialog for "Page Being Built" */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">Page Under Construction</DialogTitle>
          </DialogHeader>
          <div className="text-center py-6">
            <div className="w-16 h-16 items-center justify-center mx-auto mb-4">
              <img src="/bonk-logo.png" alt="Logo" className="w-16 h-18 rounded-full" />
            </div>
            <p className="text-gray-600 mb-4">
              This page is currently being built. Check back soon!
            </p>
            <Button onClick={() => setShowDialog(false)} className="bg-green-600 hover:bg-green-700">
              Got it
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default App

