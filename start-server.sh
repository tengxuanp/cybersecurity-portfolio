#!/bin/bash

echo "🚀 Starting React Development Server..."
echo "📡 Testing CSDN RSS Integration"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

echo "🔄 Starting development server..."
echo "📱 Your portfolio will be available at: http://localhost:3000"
echo "🔍 Navigate to the 'Blog' section to see your CSDN posts"
echo ""
echo "✅ RSS URL: https://rss.csdn.net/rafaelroot/rss/map"
echo "✅ Posts Component: Updated with search functionality"  
echo "✅ 3D Trophy Room: Available via '3D Room' navigation"
echo ""

npm start
