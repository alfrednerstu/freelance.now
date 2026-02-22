const domainRoles = {
	"marketer.now": "marketer",
	"uxwriter.now": "UX writer",
	"copywriter.now": "copywriter",
	"writer.now": "writer",
	"freelance.now": "freelancer",
	"designer.now": "designer",
	"creator.now": "creator",
	"illustrator.now": "illustrator",
	"programmer.now": "programmer",
	"choose.expert": "expert",
	"choose.studio": "studio",
};

export function getDomain(hostname) {
	// Strip port and www prefix
	const bare = hostname.replace(/:\d+$/, "").replace(/^www\./, "");
	return bare;
}

export function getRole(hostname) {
	const domain = getDomain(hostname);
	return domainRoles[domain] || "freelancer";
}

export function getDomainName(hostname) {
	const domain = getDomain(hostname);
	if (!(domain in domainRoles)) return "Freelance.now";
	return domain.charAt(0).toUpperCase() + domain.slice(1);
}
