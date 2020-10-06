function getMetadata () {
  const dataMeta = document.querySelector('meta[name="brightspot-dataLayer"]')

  if (!dataMeta || !dataMeta.content) return null
  return JSON.parse(dataMeta.content)
}

export default getMetadata
