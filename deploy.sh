echo "deployment started......."
npm run build
git add .
git commit -m "created build for deployment"
git push origin master
echo "deployment completed ....."
