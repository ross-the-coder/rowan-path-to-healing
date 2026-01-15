# Deploy Workflow (Quick Reference)

## Daily work (Preview on Vercel)
```sh
git checkout develop
git pull origin develop
# edit files…
git add -A
git commit -m "Describe change"
git push origin develop
```

## Publish to Production (Vercel production branch)
```sh
git checkout main
git pull origin main
git merge develop
git push origin main
```

## Check current branch
```sh
git branch --show-current
```
