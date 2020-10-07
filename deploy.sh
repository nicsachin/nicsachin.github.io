echo "deployment started......."

cp -r build/. /home/sachin/WebstormProjects/portfolio-website-hosted
echo "build copied ....."
cd ..
cd portfolio-website-hosted
echo "inside folder ....."
git add .
git commit -m "$(date)"
git push origin master
echo "deployment completed ....."
