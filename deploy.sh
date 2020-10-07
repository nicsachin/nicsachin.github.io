echo "deployment started ......."
npm run build
echo "build made ........"
git add .
git commit -m  date
git push deploy master
echo "deployed ......."
