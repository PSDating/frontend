npm run build && docker build -t psdating/frontend . && docker push psdating/frontend && kubectl delete deployment frontend-deployment && kubectl apply -f kubernetes/frontend-deployment.yaml
