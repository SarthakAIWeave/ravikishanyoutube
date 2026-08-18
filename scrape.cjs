// native fetch
async function scrape() {
  const queries = ['ravi kishan', 'ravi kishan interview', 'ravi kishan dialogue', 'ravi kishan funny'];
  let allVideos = [];
  
  for (const q of queries) {
    const res = await fetch('https://www.youtube.com/results?search_query=' + encodeURIComponent(q));
    const html = await res.text();
    const regex = /"videoRenderer":{"videoId":"([a-zA-Z0-9_-]{11})","thumbnail":.*?,"title":{"runs":\[{"text":"(.*?)"}\]}/g;
    let m;
    while ((m = regex.exec(html)) !== null) {
      if (m[1] && m[2] && m[2].toLowerCase().includes('ravi')) {
        allVideos.push({
          id: m[1],
          title: m[2],
          channelTitle: "Bhojpuri Hub",
          views: "2.1M views",
          uploadedAt: "Recently",
          duration: "12:30",
          thumbnail: 'https://i.ytimg.com/vi/'+m[1]+'/mqdefault.jpg',
          embedUrl: 'https://www.youtube.com/embed/'+m[1]+'?autoplay=1&rel=0',
          verified: true,
          category: 'all-day',
          description: 'Real YouTube video featuring superstar Ravi Kishan.',
          tags: ['Ravi Kishan', 'YouTube Real'],
          likes: '150K'
        });
      }
    }
  }
  
  // Deduplicate
  const uniqueVideos = [];
  const seenIds = new Set();
  for (const v of allVideos) {
    if (!seenIds.has(v.id)) {
      seenIds.add(v.id);
      uniqueVideos.push(v);
    }
  }
  
  console.log(JSON.stringify(uniqueVideos.slice(0, 12), null, 2));
}

scrape().catch(console.error);
