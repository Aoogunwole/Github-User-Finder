class Github {
    constructor() {
        this.client_id = "db79a22f7031088a90ce";
        this.client_secret = "fd1acd887fe4ed6f3b96832396dc8b52df83f2f5";
        this.repos_count = 5;
        this.repos_sort = "created: asc"
    }

    async getUser(user) {
        const response = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_count}&client_id=${this.client_id}&client_secret${this.client_secret}`);

        const profile = await response.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}


