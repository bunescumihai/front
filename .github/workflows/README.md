# GitHub Actions workflows

## `frontend-ghcr.yml`
Builds the Angular app, builds the Docker image (nginx runtime), and pushes it to GitHub Container Registry.

### Required repository secrets
- `ACTIONS_SECRET`: a GitHub **Personal Access Token** (classic) with at least:
  - `write:packages`
  - `read:packages`
  - (optional) `delete:packages`

> Note: `GITHUB_TOKEN` can also work for GHCR pushes in many repos, but this workflow follows your template and uses `ACTIONS_SECRET`.

### Configure image name
Edit `env.IMAGE_NAME` in `frontend-ghcr.yml` to match your GHCR image path, e.g.:
- `bunescumihai/front`
- or `orgname/hr-front`

The image will be pushed as:
- `ghcr.io/<IMAGE_NAME>:latest` (default branch only)
- `ghcr.io/<IMAGE_NAME>:sha-<shortsha>`

### Optional deployment steps
The included deploy steps are **disabled by default** because this repo currently has no `k8s/` manifests.

If/when you add k8s YAML, set `K8S_MANIFEST_PATH` in the workflow file and add these secrets:
- `AWS_HOST`
- `AWS_USER`
- `AWS_PEM_KEY`

Then the workflow will upload the manifest and run `kubectl apply` on the server.

