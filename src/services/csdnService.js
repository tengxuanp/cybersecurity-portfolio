// Your actual CSDN RSS feed URL - corrected to working endpoint
const RSS_URL = 'https://rss.csdn.net/rafaelroot/rss/map';

// Browser-compatible XML parser using DOMParser
const parseRSSXML = (xmlString) => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
  
  // Check for parsing errors
  const parserError = xmlDoc.querySelector('parsererror');
  if (parserError) {
    throw new Error('XML parsing error: ' + parserError.textContent);
  }
  
  const items = xmlDoc.querySelectorAll('item');
  return Array.from(items).map(item => {
    // Helper function to get text content safely
    const getTextContent = (selector) => {
      const element = item.querySelector(selector);
      return element ? element.textContent.trim() : '';
    };
    
    return {
      title: getTextContent('title'),
      link: getTextContent('link'),
      description: getTextContent('description'),
      pubDate: getTextContent('pubDate'),
      guid: getTextContent('guid'),
      author: getTextContent('author') || 'rafaelroot'
    };
  });
};

// Fallback data - your actual latest CSDN posts from RSS feed
const fallbackPosts = [
  {
    title: "【HackTheBox】Imagery Writeup",
    link: "https://blog.csdn.net/rafaelroot/article/details/156900607",
    description: "通过Nmap扫描发现开放了SSH(22)和HTTP(8000)端口，网站存在/report-bug端点的XSS漏洞，成功窃取管理员cookie。进一步利用LFI漏洞获取用户凭据，破解哈希后获得testuser和mark账户权限。最后通过sudo提权利用charcol工具的命令注入功能获取root权限。",
    pubDate: "Wed, 14 Jan 2026 15:12:10 +0800",
    guid: "https://blog.csdn.net/rafaelroot/article/details/156900607",
    author: "rafaelroot",
    tags: ['HackTheBox', 'Writeup', 'XSS', 'LFI', 'Privilege Escalation']
  },
  {
    title: "【HackTheBox】Jerry",
    link: "https://blog.csdn.net/rafaelroot/article/details/153420893",
    description: "本文记录了Apache Tomcat服务的漏洞渗透过程。使用hydra爆破获取tomcat/s3cret凭证登录后，发现存在文件上传功能。利用Windows系统RCE漏洞PoC，修改cmd.war文件并上传至Tomcat服务器。通过/cmd/cmd.jsp路径成功执行系统命令，最终获取目标主机上的user.txt和root.txt文件内容。",
    pubDate: "Sat, 18 Oct 2025 21:27:06 +0800",
    guid: "https://blog.csdn.net/rafaelroot/article/details/153420893",
    author: "rafaelroot",
    tags: ['HackTheBox', 'Apache Tomcat', 'RCE', 'File Upload']
  },
  {
    title: "【HackTheBox】Keeper Writeup",
    link: "https://blog.csdn.net/rafaelroot/article/details/153341480",
    description: "本文记录了针对从内存转储中提取密码的完整渗透测试过程。首先通过信息收集发现开放端口22(SSH)和80(HTTP)，成功利用默认凭证(root/password)登录网站后台，获取用户lnorgaard的密码。通过SSH登录后，发现RT30000.zip压缩包，内含KeePass密码数据库文件。利用CVE-2023-32784漏洞从内存转储中提取部分密码线索，最终破解完整密码。",
    pubDate: "Thu, 16 Oct 2025 14:13:05 +0800",
    guid: "https://blog.csdn.net/rafaelroot/article/details/153341480",
    author: "rafaelroot",
    tags: ['HackTheBox', 'KeePass', 'CVE-2023-32784', 'Memory Dump']
  },
  {
    title: "【HackTheBox】Sunday Writeup",
    link: "https://blog.csdn.net/rafaelroot/article/details/153269670",
    description: "本文记录了从SSH爆破实现横向突破的完整渗透测试过程。通过nmap扫描发现Finger服务(79端口)存在用户枚举漏洞，利用该漏洞获取SSH用户信息。使用hydra爆破SSH(22022端口)获得sunny账号密码，进而发现备份文件中的密码哈希。通过john破解哈希获取sammy账号权限。",
    pubDate: "Wed, 15 Oct 2025 17:06:25 +0800",
    guid: "https://blog.csdn.net/rafaelroot/article/details/153269670",
    author: "rafaelroot",
    tags: ['HackTheBox', 'SSH', 'Finger', 'Privilege Escalation']
  },
  {
    title: "【HackTheBox】Poison Writeup",
    link: "https://blog.csdn.net/rafaelroot/article/details/153139315",
    description: "本文记录了针对FreeBSD系统的渗透测试过程。通过信息收集发现系统存在LFI漏洞和加密密码，成功利用SSH登录获取用户权限。随后使用linpeas.sh进行提权分析，发现VNC服务运行在5901端口，通过SSH端口转发连接VNC并使用secret文件认证，最终获取root权限。",
    pubDate: "Mon, 13 Oct 2025 20:40:04 +0800",
    guid: "https://blog.csdn.net/rafaelroot/article/details/153139315",
    author: "rafaelroot",
    tags: ['HackTheBox', 'FreeBSD', 'LFI', 'VNC', 'Port Forwarding']
  }
];

// Parse XML to JSON - not needed with rss-parser
// const parseXMLToJSON = (xmlData) => { ... }

// Extract tags from post title and description (updated for Chinese content)
const extractTags = (title, description) => {
  const tags = [];
  
  // Common patterns in your posts (both English and Chinese)
  if (title.includes('HackTheBox') || title.includes('HTB')) tags.push('HackTheBox');
  if (title.includes('Writeup')) tags.push('Writeup');
  if (title.includes('CVE-')) tags.push('CVE');
  
  // Chinese keywords
  if (description.includes('XSS') || description.includes('跨站脚本')) tags.push('XSS');
  if (description.includes('LFI') || description.includes('文件包含')) tags.push('LFI');
  if (description.includes('SQL注入') || title.includes('SQL')) tags.push('SQL Injection');
  if (description.includes('Active Directory') || description.includes('AD') || description.includes('活动目录')) tags.push('Active Directory');
  if (description.includes('RCE') || description.includes('远程代码执行') || description.includes('命令执行')) tags.push('RCE');
  if (description.includes('Apache Tomcat') || description.includes('Tomcat')) tags.push('Apache Tomcat');
  if (description.includes('KeePass') || description.includes('密码数据库')) tags.push('KeePass');
  if (description.includes('内存转储') || description.includes('Memory Dump')) tags.push('Memory Dump');
  if (description.includes('SSH') || description.includes('爆破')) tags.push('SSH');
  if (description.includes('Finger') || description.includes('用户枚举')) tags.push('Finger');
  if (description.includes('FreeBSD')) tags.push('FreeBSD');
  if (description.includes('VNC') || description.includes('端口转发')) tags.push('VNC');
  if (description.includes('权限提升') || description.includes('Privilege') || description.includes('提权')) tags.push('Privilege Escalation');
  if (description.includes('文件上传') || description.includes('File Upload')) tags.push('File Upload');
  if (description.includes('端口转发') || description.includes('Port Forwarding')) tags.push('Port Forwarding');
  if (description.includes('渗透测试') || description.includes('Penetration')) tags.push('Penetration Testing');
  if (description.includes('漏洞') || description.includes('Vulnerability')) tags.push('Vulnerability Analysis');
  
  return tags.length > 0 ? tags : ['Cybersecurity'];
};

// Fetch posts from CSDN RSS with fallback
export const fetchCSDNPosts = async (maxPosts = 6, retryCount = 0) => {
  const maxRetries = 2;
  
  try {
    console.log(`Fetching CSDN RSS feed... (attempt ${retryCount + 1}/${maxRetries + 1})`);
    
    // Use CORS proxy to bypass CORS issues in browser
    const proxyUrl = 'https://api.allorigins.win/get?url=';
    const targetUrl = encodeURIComponent(RSS_URL);
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);
    
    const response = await fetch(`${proxyUrl}${targetUrl}`, {
      signal: controller.signal,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`RSS fetch failed with status: ${response.status}`);
    }

    const data = await response.json();
    const rssText = data.contents;
    
    if (!rssText) {
      throw new Error('No RSS content received');
    }

    console.log('RSS fetch successful, parsing with DOMParser...');
    
    // Parse RSS with browser DOMParser
    const posts = parseRSSXML(rssText);
    
    if (!posts || posts.length === 0) {
      throw new Error('No items found in RSS feed');
    }

    const processedPosts = posts.slice(0, maxPosts).map((item) => {
      const title = item.title || 'Untitled';
      const description = item.description || '';
      const tags = extractTags(title, description);
      
      return {
        title,
        link: item.link || '#',
        description,
        pubDate: item.pubDate || new Date().toISOString(),
        guid: item.guid || item.link || '',
        author: item.author || 'rafaelroot',
        tags
      };
    });

    console.log(`Successfully parsed ${processedPosts.length} posts from RSS feed`);

    return {
      success: true,
      posts: processedPosts,
      source: 'rss',
      count: processedPosts.length
    };
    
  } catch (error) {
    console.error('RSS parsing error:', error?.message || error);
    
    // Retry logic
    if (retryCount < maxRetries && error.name !== 'AbortError') {
      console.log(`Retrying RSS fetch in 2 seconds...`);
      await new Promise(resolve => setTimeout(resolve, 2000));
      return fetchCSDNPosts(maxPosts, retryCount + 1);
    }
    
    // Return fallback data after all retries failed
    console.warn('All RSS fetch attempts failed, using fallback data');
    return {
      success: true,
      posts: fallbackPosts.slice(0, maxPosts),
      source: 'fallback',
      message: `RSS error after ${maxRetries + 1} attempts: ${error?.message || 'Unknown error'}`
    };
  }
};

export const CSDNApiService = {
  getPosts: fetchCSDNPosts
};
