# create a bash script to deploy a web application using kubernetes and docker
set -e

NAME="kubernetes_trial"
USERNAME="gilbertkamau"

IMAGE="$USERNAME/$NAME:latest"


echo "Building Docker image..."
docker build -t $IMAGE .

echo "Pushing Docker image to Docker Hub..."
docker push $IMAGE

echo "Applying kubernetes manifests..."
kubectl apply -f k8s/

echo "Getting pod status..."
kubectl get pods

echo "Getting service status..."
kubectl get services

echo "Fetching the main service"
kubectl get services $NAME-service