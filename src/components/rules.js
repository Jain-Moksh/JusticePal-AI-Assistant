const rules = [
  {
    id: 1,
    category: "Cybercrime",
    issue_example: "Phishing website",
    rights_explained:
      "If you encounter a website designed to impersonate a trusted institution and lure you into providing personal or financial details, immediately refrain from entering any information. Document the URL, take screenshots, and report the site to your local cybercrime unit or national cyber portal. This action protects your digital identity and helps authorities prevent further fraudulent activities. If you encounter a website designed to impersonate a trusted institution and lure you into providing personal or financial details, immediately refrain from entering any information. Document the URL, take screenshots, and report the site to your local cybercrime unit or national cyber portal. This action protects your digital identity and helps authorities prevent further fraudulent activities.",
    penalty: "Up to 3 years’ imprisonment and/or fine",
  },
  {
    id: 2,
    category: "Cybercrime",
    issue_example: "Identity theft",
    rights_explained:
      "When someone fraudulently uses your personal details (such as your name, address, or social security number) to open accounts or commit other crimes, you have the right to notify your bank, report the matter to the police, and alert identity protection agencies. Collect all relevant documents and records of suspicious activities to support your case and help prevent additional misuse. When someone fraudulently uses your personal details (such as your name, address, or social security number) to open accounts or commit other crimes, you have the right to notify your bank, report the matter to the police, and alert identity protection agencies. Collect all relevant documents and records of suspicious activities to support your case and help prevent additional misuse.",
    penalty: "Up to 3 years’ imprisonment and/or fine",
  },
  {
    id: 3,
    category: "Cybercrime",
    issue_example: "Cyberbullying",
    rights_explained:
      "If you’re being harassed online through social media, emails, or messaging apps—with abusive, threatening, or defamatory messages—collect all evidence (screenshots, messages) and file a report with cybercrime authorities. This process helps protect your online safety and can lead to measures that prevent ongoing harassment. If you’re being harassed online through social media, emails, or messaging apps—with abusive.",
    penalty: "Fines, restraining orders, or imprisonment ",
  },
  {
    id: 4,
    category: "Cybercrime",
    issue_example: "Ransomware attack",
    rights_explained:
      "In the event that your computer files are encrypted by malicious software demanding payment, immediately disconnect from the internet, report the incident to cybersecurity professionals and law enforcement, and avoid paying the ransom. Acting promptly can help limit data loss and set a precedent against such cybercrimes. In the event that your computer files are encrypted by malicious software demanding payment, immediately disconnect from the internet, report the incident to cybersecurity professionals and law enforcement, and avoid paying the ransom. Acting promptly can help limit data loss and set a precedent against such cybercrimes.",
    penalty: "Criminal charges with possible imprisonment and fines",
  },
  {
    id: 5,
    category: "Cybercrime",
    issue_example: "Social media impersonation",
    rights_explained:
      "Should someone create a fake online profile using your name or photos to misrepresent your identity, report the account to the social media platform and file a complaint with cybercrime units. This step helps ensure that your digital identity is safeguarded and that impersonators are held accountable. Should someone create a fake online profile using your name or photos to misrepresent your identity, report the account to the social media platform and file a complaint with cybercrime units. This step helps ensure that your digital identity is safeguarded and that impersonators are held accountable.",
    penalty: "Up to 3 years’ imprisonment and/or fine",
  },
  {
    id: 6,
    category: "Cybercrime",
    issue_example: "Cryptocurrency scam",
    rights_explained:
      "If you invest in a cryptocurrency scheme that turns out to be fraudulent—with unrealistic promises and no real investment—the law protects you by allowing you to report the scam to financial and cybercrime authorities. Provide transactional evidence to support your claim and help prevent others from falling victim. If you invest in a cryptocurrency scheme that turns out to be fraudulent—with unrealistic promises and no real investment—the law protects you by allowing you to report the scam to financial and cybercrime authorities. Provide transactional evidence to support your claim and help prevent others from falling victim.",
    penalty:
      "Varies by jurisdiction; may involve heavy fines and prison sentences",
  },
  {
    id: 7,
    category: "Cybercrime",
    issue_example: "Hate speech online",
    rights_explained:
      "When you come across hate speech online that incites violence or targets particular groups, preserve evidence such as screenshots and URLs. File a report with both the digital platform and law enforcement to ensure that hate speech is addressed legally and that public discourse is maintained respectfully. When you come across hate speech online that incites violence or targets particular groups, preserve evidence such as screenshots and URLs. File a report with both the digital platform and law enforcement to ensure that hate speech is addressed legally and that public discourse is maintained respectfully.",
    penalty: "Fines, imprisonment, or both",
  },
  {
    id: 8,
    category: "Civil",
    issue_example: "Physical assault",
    rights_explained:
      "If you become a victim of physical assault, you have the right to immediate legal and medical protection. Report the incident to the police, obtain medical attention, document your injuries with photos and reports, and consider obtaining a restraining order. These measures help secure your personal safety and legal recourse. If you become a victim of physical assault, you have the right to immediate legal and medical protection. Report the incident to the police, obtain medical attention, document your injuries with photos and reports, and consider obtaining a restraining order. These measures help secure your personal safety and legal recourse.",
    penalty: "Imprisonment (up to several years) and/or fines",
  },
  {
    id: 9,
    category: "Civil",
    issue_example: "Stalking",
    rights_explained:
      "When experiencing persistent unwanted contact or being followed, your right to personal security allows you to gather evidence from repeated incidents, such as logs, screenshots, or witness statements. Report the behavior to law enforcement so that restraining orders and police intervention can prevent further harassment. When experiencing persistent unwanted contact or being followed, your right to personal security allows you to gather evidence from repeated incidents, such as logs, screenshots, or witness statements. Report the behavior to law enforcement so that restraining orders and police intervention can prevent further harassment.",
    penalty: "Restraining order, fines, and possible imprisonment",
  },
  {
    id: 10,
    category: "Civil",
    issue_example: "Trespassing",
    rights_explained:
      "If someone unlawfully enters your property, you are entitled to safeguard your private space. Document the intrusion with photos or video evidence, and promptly contact the police. This right ensures that your property is protected and that authorities can take appropriate action against unauthorized entry. If someone unlawfully enters your property, you are entitled to safeguard your private space. Document the intrusion with photos or video evidence, and promptly contact the police. This right ensures that your property is protected and that authorities can take appropriate action against unauthorized entry.",
    penalty: "Fines, possible jail time depending on the severity",
  },
  {
    id: 11,
    category: "Civil",
    issue_example: "Vandalism",
    rights_explained:
      "If your property is defaced or damaged through acts like graffiti or broken windows, document the damage with photographs and witness statements. File a police report to initiate an investigation that may lead to restitution for damages and criminal charges against the vandal. If your property is defaced or damaged through acts like graffiti or broken windows, document the damage with photographs and witness statements. File a police report to initiate an investigation that may lead to restitution for damages and criminal charges against the vandal.",
    penalty: "Fines and/or imprisonment, plus restitution for damages",
  },
  {
    id: 12,
    category: "Civil",
    issue_example: "Kidnapping",
    rights_explained:
      "If you or someone you know is abducted, your fundamental right to life and freedom demands that you call law enforcement immediately, notify family if possible, and follow the guidance of crisis intervention teams. This right is designed to ensure a swift governmental response to secure the victim's safe return. If you or someone you know is abducted, your fundamental right to life and freedom demands that you call law enforcement immediately, notify family if possible, and follow the guidance of crisis intervention teams. This right is designed to ensure a swift governmental response to secure the victim's safe return.",
    penalty: "Severe criminal charges with long-term imprisonment",
  },
  {
    id: 13,
    category: "Civil",
    issue_example: "Sexual harassment",
    rights_explained:
      "If you experience unwanted sexual advances or harassment in any setting, document the incidents with details and any available evidence (such as messages or emails) and report them to law enforcement or the relevant organizational authority. This right upholds your dignity and ensures that appropriate legal measures are taken. If you experience unwanted sexual advances or harassment in any setting, document the incidents with details and any available evidence (such as messages or emails) and report them to law enforcement or the relevant organizational authority. This right upholds your dignity and ensures that appropriate legal measures are taken.",
    penalty: "Fines, imprisonment, and possible civil liability",
  },
  {
    id: 14,
    category: "Civil",
    issue_example: "Domestic violence",
    rights_explained:
      "When facing abuse at home, you have the right to seek immediate protection. Contact law enforcement, secure medical treatment, and document the incidents. Additionally, consider applying for a restraining order and using support services like shelters to ensure your safety and that of your family. When facing abuse at home, you have the right to seek immediate protection. Contact law enforcement, secure medical treatment, and document the incidents. Additionally, consider applying for a restraining order and using support services like shelters to ensure your safety and that of your family.",
    penalty:
      "Fines, imprisonment, restraining orders, and various protective measures",
  },
  {
    id: 15,
    category: "Civil",
    issue_example: "Child abuse",
    rights_explained:
      "If you suspect or witness abuse against a child, it is your duty and right to report the incident to child protection services or the police immediately. Detailed documentation such as photos, notes, or witness accounts is critical to trigger swift intervention and to ensure the child’s safety. If you suspect or witness abuse against a child, it is your duty and right to report the incident to child protection services or the police immediately. Detailed documentation such as photos, notes, or witness accounts is critical to trigger swift intervention and to ensure the child’s safety.",
    penalty:
      "Significant imprisonment and/or fines, along with mandatory child protection interventions",
  },
  {
    id: 16,
    category: "Economic",
    issue_example: "Wage theft",
    rights_explained:
      "If an employer unlawfully withholds wages or misclassifies work hours, your right to fair employment conditions allows you to file a complaint with labor authorities. Keep copies of your pay records, work schedules, and any communications that can support your claim for recovering the owed wages. If an employer unlawfully withholds wages or misclassifies work hours, your right to fair employment conditions allows you to file a complaint with labor authorities. Keep copies of your pay records, work schedules, and any communications that can support your claim for recovering the owed wages.",
    penalty: "Fines, back pay orders, and potential criminal charges",
  },
  {
    id: 17,
    category: "Economic",
    issue_example: "Employment discrimination",
    rights_explained:
      "When you experience unfair treatment in hiring, promotion, or workplace practices based on race, gender, or other prohibited factors, your rights empower you to file a discrimination complaint. Gather documents, emails, and any evidence of bias to support your case with the Equal Opportunity Commission or a labor tribunal. When you experience unfair treatment in hiring, promotion, or workplace practices based on race, gender, or other prohibited factors, your rights empower you to file a discrimination complaint. Gather documents, emails, and any evidence of bias to support your case with the Equal Opportunity Commission or a labor tribunal.",
    penalty:
      "Compensation, reinstatement, and fines for the offending employer",
  },
  {
    id: 18,
    category: "Economic",
    issue_example: "Unfair dismissal",
    rights_explained:
      "If you are fired without due cause, your right to job security allows you to challenge the termination through labor courts or tribunals. Retain all related documentation such as performance reviews, contracts, and correspondence with your employer to substantiate your claim for reinstatement or compensation. If you are fired without due cause, your right to job security allows you to challenge the termination through labor courts or tribunals. Retain all related documentation such as performance reviews, contracts, and correspondence with your employer to substantiate your claim for reinstatement or compensation.",
    penalty: "Reinstatement, back wages, and/or fines against the employer",
  },
  {
    id: 19,
    category: "Economic",
    issue_example: "Consumer fraud",
    rights_explained:
      "If you are sold counterfeit products or are misled during a financial transaction, your consumer protection rights enable you to file a complaint with consumer protection agencies. Keep receipts, warranties, and advertising materials as evidence to pursue a refund or damages through civil action. If you are sold counterfeit products or are misled during a financial transaction, your consumer protection rights enable you to file a complaint with consumer protection agencies. Keep receipts, warranties, and advertising materials as evidence to pursue a refund or damages through civil action.",
    penalty:
      "Fines or imprisonment for perpetrators, along with compensation for victims",
  },
  {
    id: 20,
    category: "Economic",
    issue_example: "Product mislabeling",
    rights_explained:
      "If a product’s label or advertisement is found to be misleading—such as inaccurate safety claims or false ingredient information—your right to honest consumer information lets you report the issue to regulatory bodies. Documentation such as product photos and advertising material will assist in holding the responsible companies accountable. If a product’s label or advertisement is found to be misleading—such as inaccurate safety claims or false ingredient information—your right to honest consumer information lets you report the issue to regulatory bodies. Documentation such as product photos and advertising material will assist in holding the responsible companies accountable.",
    penalty: "Product bans, heavy fines, and possible criminal liability",
  },
  {
    id: 21,
    category: "Economic",
    issue_example: "Trademark infringement",
    rights_explained:
      "If another business or individual uses your registered trademark without permission, your intellectual property rights protect your brand. Collect evidence of the infringement and file a civil lawsuit to seek damages and obtain an injunction to halt further unauthorized use. If another business or individual uses your registered trademark without permission, your intellectual property rights protect your brand. Collect evidence of the infringement and file a civil lawsuit to seek damages and obtain an injunction to halt further unauthorized use.",
    penalty: "Injunctions, fines, and in some cases, imprisonment",
  },
  {
    id: 22,
    category: "Economic",
    issue_example: "Inheritance dispute",
    rights_explained:
      "If you believe that you are being unjustly denied your rightful inheritance, your legal rights allow you to file a civil suit to enforce the terms of the will or estate. Secure a copy of the will and any pertinent legal documents, and compile evidence of undue influence or fraud to support your claim. If you believe that you are being unjustly denied your rightful inheritance, your legal rights allow you to file a civil suit to enforce the terms of the will or estate. Secure a copy of the will and any pertinent legal documents, and compile evidence of undue influence or fraud to support your claim.",
    penalty:
      "Distribution as per court orders and potential fines if orders are not followed",
  },
  {
    id: 23,
    category: "Economic",
    issue_example: "Money laundering",
    rights_explained:
      "If you suspect that funds are being laundered—such as through hidden or manipulated financial records—you have the right to report the behavior to financial regulators or law enforcement. Provide detailed financial statements and transaction records to aid in a thorough investigation that protects the integrity of the financial system. If you suspect that funds are being laundered—such as through hidden or manipulated financial records—you have the right to report the behavior to financial regulators or law enforcement. Provide detailed financial statements and transaction records to aid in a thorough investigation that protects the integrity of the financial system.",
    penalty:
      "Major criminal penalties including long-term imprisonment and asset seizure",
  },
  {
    id: 24,
    category: "Economic",
    issue_example: "Ponzi scheme",
    rights_explained:
      "Should you be enticed into an investment scheme promising unrealistically high returns that proves fraudulent, document all communications, contracts, and payment records. Your right to fair investment practices allows you to report the scam to financial authorities, which can help protect others and possibly recover lost funds. Should you be enticed into an investment scheme promising unrealistically high returns that proves fraudulent, document all communications, contracts, and payment records. Your right to fair investment practices allows you to report the scam to financial authorities, which can help protect others and possibly recover lost funds.",
    penalty: "Heavy fines, prison terms, and restitution orders for operators",
  },
  {
    id: 25,
    category: "Economic",
    issue_example: "Corporate espionage",
    rights_explained:
      "When a business illegally acquires your trade secrets or confidential information, your rights protect you by allowing legal action against the offender. Gather evidence of the breach and seek legal advice to file a civil suit that may result in damages and an injunction to stop further espionage. When a business illegally acquires your trade secrets or confidential information, your rights protect you by allowing legal action against the offender. Gather evidence of the breach and seek legal advice to file a civil suit that may result in damages and an injunction to stop further espionage.",
    penalty: "Criminal charges, hefty fines, and injunctions",
  },
  {
    id: 26,
    category: "Environmental",
    issue_example: "Illegal dumping",
    rights_explained:
      "If you witness the unauthorized disposal of hazardous waste or other materials in your community, document the incident with photos and precise location data. Report the matter to local environmental authorities so that cleanup efforts can be enforced and the responsible parties held accountable. If you witness the unauthorized disposal of hazardous waste or other materials in your community, document the incident with photos and precise location data. Report the matter to local environmental authorities so that cleanup efforts can be enforced and the responsible parties held accountable.",
    penalty: "Fines, cleanup orders, and possible criminal charges",
  },
  {
    id: 27,
    category: "Environmental",
    issue_example: "Air pollution violation",
    rights_explained:
      "When an industrial site or factory exceeds legally permitted emission levels, your right to breathe clean air allows you to report the violations. Gather air quality test results, photos, or witness statements, and alert environmental regulators to prompt inspections and corrective actions. When an industrial site or factory exceeds legally permitted emission levels, your right to breathe clean air allows you to report the violations. Gather air quality test results, photos, or witness statements, and alert environmental regulators to prompt inspections and corrective actions.",
    penalty: "Fines, license revocation, and potential facility closure",
  },
  {
    id: 28,
    category: "Environmental",
    issue_example: "Water contamination",
    rights_explained:
      "If you notice contamination of public water supplies due to industrial discharge or agricultural runoff, document the incident and report it to environmental protection agencies. Your right to safe drinking water ensures that authorities will investigate and enforce remediation measures to protect public health. If you notice contamination of public water supplies due to industrial discharge or agricultural runoff, document the incident and report it to environmental protection agencies. Your right to safe drinking water ensures that authorities will investigate and enforce remediation measures to protect public health.",
    penalty: "Cleanup orders, fines, and possible imprisonment",
  },
  {
    id: 29,
    category: "Environmental",
    issue_example: "Unauthorized deforestation",
    rights_explained:
      "Should you observe illegal logging activities that degrade natural habitats, document the occurrences with photographs and precise location details. Report the incidents to forestry and environmental authorities to ensure that steps are taken to halt deforestation and promote reforestation. Should you observe illegal logging activities that degrade natural habitats, document the occurrences with photographs and precise location details. Report the incidents to forestry and environmental authorities to ensure that steps are taken to halt deforestation and promote reforestation.",
    penalty: "Heavy fines, reforestation orders, and possible jail time",
  },
  {
    id: 30,
    category: "Environmental",
    issue_example: "Wildlife trafficking",
    rights_explained:
      "If you witness or have evidence that protected wildlife is being illegally hunted or traded, immediately notify wildlife protection agencies and law enforcement. This right is critical for preserving biodiversity and ensuring that traffickers are prosecuted under wildlife conservation laws. If you witness or have evidence that protected wildlife is being illegally hunted or traded, immediately notify wildlife protection agencies and law enforcement. This right is critical for preserving biodiversity and ensuring that traffickers are prosecuted under wildlife conservation laws.",
    penalty: "Severe penalties including large fines and imprisonment",
  },
  {
    id: 31,
    category: "Environmental",
    issue_example: "Noise pollution",
    rights_explained:
      "When excessive and continuous noise disrupts your living environment—whether from industrial operations or consistent disturbances—document the incidents and report them to local authorities. Your right to a peaceful environment ensures that noise abatement measures can be enforced to restore community well-being. When excessive and continuous noise disrupts your living environment—whether from industrial operations or consistent disturbances—document the incidents and report them to local authorities. Your right to a peaceful environment ensures that noise abatement measures can be enforced to restore community well-being.",
    penalty: "Fines, noise abatement orders, or equipment confiscation",
  },
  {
    id: 32,
    category: "Social",
    issue_example: "Social media defamation",
    rights_explained:
      "If false and damaging statements about you are circulated online, your right to protect your reputation allows you to collect evidence (such as screenshots and posts) and file a defamation suit. Legal action can force the retraction of statements and may provide compensation for harm done. If false and damaging statements about you are circulated online, your right to protect your reputation allows you to collect evidence (such as screenshots and posts) and file a defamation suit. Legal action can force the retraction of statements and may provide compensation for harm done.",
    penalty:
      "Monetary damages, retraction orders, and possible criminal defamation charges",
  },
  {
    id: 33,
    category: "Social",
    issue_example: "Social media hate group",
    rights_explained:
      "When you encounter an online group that persistently promotes hate or violence, your right to a secure digital environment empowers you to report the group to both the platform and law enforcement. Proper documentation of the content and its effects can help trigger swift removal and legal action against those spreading hate. When you encounter an online group that persistently promotes hate or violence, your right to a secure digital environment empowers you to report the group to both the platform and law enforcement. Proper documentation of the content and its effects can help trigger swift removal and legal action against those spreading hate.",
    penalty:
      "Group removal, account suspension, and criminal penalties for hate speech",
  },
  {
    id: 34,
    category: "Social",
    issue_example: "Discrimination in housing",
    rights_explained:
      "If a landlord refuses to rent property to you based on race, gender, or other protected characteristics, your right to equal housing opportunities allows you to file a discrimination complaint. Collect all communications and evidence of biased behavior to support your claim with housing tribunals or anti-discrimination agencies. If a landlord refuses to rent property to you based on race, gender, or other protected characteristics, your right to equal housing opportunities allows you to file a discrimination complaint. Collect all communications and evidence of biased behavior to support your claim with housing tribunals or anti-discrimination agencies.",
    penalty: "Compensation for victims, fines, and possible license revocation",
  },
  {
    id: 35,
    category: "Social",
    issue_example: "Discrimination in education",
    rights_explained:
      "If an educational institution denies admission or subjects you to unfair treatment due to your background, your right to equal educational opportunities empowers you to seek intervention from educational authorities or anti-discrimination bodies. Document discriminatory practices and compile supportive evidence to push for corrective policy changes. If an educational institution denies admission or subjects you to unfair treatment due to your background, your right to equal educational opportunities empowers you to seek intervention from educational authorities or anti-discrimination bodies. Document discriminatory practices and compile supportive evidence to push for corrective policy changes.",
    penalty: "Administrative actions, fines, and mandated policy changes",
  },
  {
    id: 36,
    category: "Social",
    issue_example: "Discrimination in healthcare",
    rights_explained:
      "When healthcare providers deny you adequate or timely treatment because of prejudiced assumptions, your right to equal medical care allows you to file a formal complaint with medical oversight boards. Document delays, denials, and any discriminatory comments to support your case and trigger corrective measures. When healthcare providers deny you adequate or timely treatment because of prejudiced assumptions, your right to equal medical care allows you to file a formal complaint with medical oversight boards. Document delays, denials, and any discriminatory comments to support your case and trigger corrective measures.",
    penalty: "Licensure penalties, fines, or criminal liability",
  },
  {
    id: 37,
    category: "Social",
    issue_example: "Child neglect",
    rights_explained:
      "If you observe a child being consistently deprived of food, supervision, or basic care, your right—and duty—to protect vulnerable minors requires you to report the neglect immediately to child protection services or the police. Detailed documentation, including dates and witness accounts, is key to ensuring swift intervention. If you observe a child being consistently deprived of food, supervision, or basic care, your right—and duty—to protect vulnerable minors requires you to report the neglect immediately to child protection services or the police. Detailed documentation, including dates and witness accounts, is key to ensuring swift intervention.",
    penalty: "Possible removal of the child from guardians, criminal charges",
  },
  {
    id: 38,
    category: "Social",
    issue_example: "Elderly neglect",
    rights_explained:
      "When seniors are visibly neglected—such as being left unattended or malnourished—your right to ensure dignity for all community members means you should document and report the situation to adult protective services. This documentation can prompt investigations to improve caregiving conditions and implement necessary safeguards. When seniors are visibly neglected—such as being left unattended or malnourished—your right to ensure dignity for all community members means you should document and report the situation to adult protective services. This documentation can prompt investigations to improve caregiving conditions and implement necessary safeguards.",
    penalty: "Fines, custodial sentences, or removal of caregiving rights",
  },
  {
    id: 39,
    category: "Social",
    issue_example: "Pornographic exploitation of minors",
    rights_explained:
      "If you encounter any media or behavior that exploits minors sexually, your legal obligation to protect children compels you to report it immediately to law enforcement or specialized cybercrime units. Even if the evidence is indirect, thorough reporting is critical to preventing further abuse and prosecuting offenders. If you encounter any media or behavior that exploits minors sexually, your legal obligation to protect children compels you to report it immediately to law enforcement or specialized cybercrime units. Even if the evidence is indirect, thorough reporting is critical to preventing further abuse and prosecuting offenders.",
    penalty:
      "Long-term imprisonment, sex offender registration, and heavy fines",
  },
  {
    id: 40,
    category: "Social",
    issue_example: "Forced marriage",
    rights_explained:
      "If you or someone you know is being coerced into a marriage against their will, your right to freely choose a partner allows you to seek help immediately. Contact local authorities, support helplines, or women’s rights organizations while documenting any evidence of coercion or threats to initiate legal intervention. If you or someone you know is being coerced into a marriage against their will, your right to freely choose a partner allows you to seek help immediately. Contact local authorities, support helplines, or women’s rights organizations while documenting any evidence of coercion or threats to initiate legal intervention.",
    penalty: "Nullification of the marriage, imprisonment, and fines",
  },
  {
    id: 41,
    category: "Social",
    issue_example: "Gender-based violence",
    rights_explained:
      "If you experience violence or harassment based on your gender, your right to personal security and equality empowers you to report the incident immediately. Collect evidence such as injury photos, medical records, and witness statements, and seek support from advocacy groups to ensure that legal measures are taken against the offender. If you experience violence or harassment based on your gender, your right to personal security and equality empowers you to report the incident immediately. Collect evidence such as injury photos, medical records, and witness statements, and seek support from advocacy groups to ensure that legal measures are taken against the offender.",
    penalty: "Imprisonment, fines, and protective measures",
  },
  {
    id: 42,
    category: "Political",
    issue_example: "Election rigging",
    rights_explained:
      "If you observe suspicious behavior such as vote tampering or intimidation at polling stations, your right to free and fair elections allows you to report these irregularities to the Election Commission or independent watchdog groups. Document the incidents and gather witness accounts so that investigations can secure the integrity of the electoral process. If you observe suspicious behavior such as vote tampering or intimidation at polling stations, your right to free and fair elections allows you to report these irregularities to the Election Commission or independent watchdog groups. Document the incidents and gather witness accounts so that investigations can secure the integrity of the electoral process.",
    penalty:
      "Annulment of results, imprisonment, and disqualification from holding office",
  },
  {
    id: 43,
    category: "Political",
    issue_example: "Voter intimidation",
    rights_explained:
      "If you or other voters are threatened or coerced from casting your ballots, your right to participate in elections obligates you to report these incidents to election officials and law enforcement. Record the details and encourage witnesses to come forward, ensuring that your vote remains free from undue influence. If you or other voters are threatened or coerced from casting your ballots, your right to participate in elections obligates you to report these incidents to election officials and law enforcement. Record the details and encourage witnesses to come forward, ensuring that your vote remains free from undue influence.",
    penalty: "Criminal charges, fines, or prison sentences",
  },
  {
    id: 44,
    category: "Political",
    issue_example: "Freedom of speech violation",
    rights_explained:
      "When authorities or institutions inhibit your ability to express opinions through censorship or unwarranted suppression, your right to free speech allows you to challenge these actions legally. Document each instance of suppression to support your claim in court or before human rights commissions. When authorities or institutions inhibit your ability to express opinions through censorship or unwarranted suppression, your right to free speech allows you to challenge these actions legally. Document each instance of suppression to support your claim in court or before human rights commissions.",
    penalty: "Court-ordered remedies, damages, and possible official sanctions",
  },
  {
    id: 45,
    category: "Political",
    issue_example: "Arbitrary censorship",
    rights_explained:
      "If a government or private body restricts your right to share information or opinions without a clear, justified reason, your right to information demands that you contest such censorship. Compile evidence of the imposed restrictions and consult with legal advocacy groups to have the censorship reversed. If a government or private body restricts your right to share information or opinions without a clear, justified reason, your right to information demands that you contest such censorship. Compile evidence of the imposed restrictions and consult with legal advocacy groups to have the censorship reversed.",
    penalty: "Overturn of censorship orders; fines or disciplinary actions",
  },
  {
    id: 46,
    category: "Political",
    issue_example: "Protest clampdown",
    rights_explained:
      "In the event that a peaceful demonstration is met with excessive force or unlawful dispersal, your right to protest is protected by law. Record incidents, gather witness accounts, and use legal channels or human rights forums to challenge the misconduct. In the event that a peaceful demonstration is met with excessive force or unlawful dispersal, your right to protest is protected by law. Record incidents, gather witness accounts, and use legal channels or human rights forums to challenge the misconduct.",
    penalty: "Court injunctions, official reprimands, and compensation claims",
  },
  {
    id: 47,
    category: "Political",
    issue_example: "Political persecution",
    rights_explained:
      "If you are targeted or harassed because of your political beliefs or activities, your right to political expression allows you to document the persecution and seek legal protection. Consult with human rights organizations and, if necessary, explore asylum options to ensure your safety. If you are targeted or harassed because of your political beliefs or activities, your right to political expression allows you to document the persecution and seek legal protection. Consult with human rights organizations and, if necessary, explore asylum options to ensure your safety.",
    penalty:
      "If proven in court, state officials may face serious legal consequences",
  },
  {
    id: 48,
    category: "Political",
    issue_example: "Espionage",
    rights_explained:
      "If accusations of espionage are made against you, your right to a fair trial entitles you to legal representation and a thorough investigation. Secure counsel immediately and gather any evidence that disproves the claims to ensure your rights are upheld throughout the judicial process. If accusations of espionage are made against you, your right to a fair trial entitles you to legal representation and a thorough investigation. Secure counsel immediately and gather any evidence that disproves the claims to ensure your rights are upheld throughout the judicial process.",
    penalty: "Heavy prison terms, possibly life imprisonment for proven cases",
  },
  {
    id: 49,
    category: "Political",
    issue_example: "Sedition",
    rights_explained:
      "If you are charged with sedition due to expressing dissenting opinions, your right to free speech protects you in court. Retain legal counsel and document the context of your remarks to demonstrate that your expressions were critiques of governance and not incitements to violence. If you are charged with sedition due to expressing dissenting opinions, your right to free speech protects you in court. Retain legal counsel and document the context of your remarks to demonstrate that your expressions were critiques of governance and not incitements to violence.",
    penalty: "Long-term imprisonment if convicted",
  },
  {
    id: 50,
    category: "Political",
    issue_example: "Bribery",
    rights_explained:
      "If you experience attempts by public officials to solicit bribes, your right to transparent governance allows you to report the incident to anti-corruption commissions. Keep records of all communications and transactions related to the bribery attempt to support the investigation. If you experience attempts by public officials to solicit bribes, your right to transparent governance allows you to report the incident to anti-corruption commissions. Keep records of all communications and transactions related to the bribery attempt to support the investigation.",
    penalty: "Fines, dismissal from public office, and imprisonment",
  },
  {
    id: 51,
    category: "Political",
    issue_example: "Nepotism",
    rights_explained:
      "When state or corporate recruitment practices favor relatives unjustly, your right to meritocracy enables you to document and report the issue to the appropriate anti-corruption bodies. Evidence such as hiring records and internal communications supports your claim for fair treatment in employment. When state or corporate recruitment practices favor relatives unjustly, your right to meritocracy enables you to document and report the issue to the appropriate anti-corruption bodies. Evidence such as hiring records and internal communications supports your claim for fair treatment in employment.",
    penalty:
      "Administrative penalties, possible prosecution, and employment termination",
  },
  {
    id: 52,
    category: "Political",
    issue_example: "Disclosing state secrets",
    rights_explained:
      "While national security is important, whistleblower laws protect you if you disclose classified information in the public interest. If you suspect abuse, follow legal protocols to protect your identity and report the wrongdoing to the designated oversight bodies. While national security is important, whistleblower laws protect you if you disclose classified information in the public interest. If you suspect abuse, follow legal protocols to protect your identity and report the wrongdoing to the designated oversight bodies.",
    penalty:
      "Heavy prison terms unless protected by robust whistleblower statutes",
  },
  {
    id: 53,
    category: "Civil",
    issue_example: "Slander (spoken defamation)",
    rights_explained:
      "If someone verbally spreads false claims that damage your reputation, your right to protect your personal honor permits you to collect witness testimony and records of the statements. You can then pursue a civil defamation lawsuit to have the damaging statements retracted and secure compensatory damages. If someone verbally spreads false claims that damage your reputation, your right to protect your personal honor permits you to collect witness testimony and records of the statements. You can then pursue a civil defamation lawsuit to have the damaging statements retracted and secure compensatory damages.",
    penalty: "Monetary damages and retraction orders",
  },
  {
    id: 54,
    category: "Civil",
    issue_example: "Libel (written defamation)",
    rights_explained:
      "If false and damaging statements about you are published in print or online, your right to safeguard your reputation allows you to compile evidence like articles and posts, and file a libel suit. This legal process can force the removal of the content and secure financial compensation for reputational harm. If false and damaging statements about you are published in print or online, your right to safeguard your reputation allows you to compile evidence like articles and posts, and file a libel suit. This legal process can force the removal of the content and secure financial compensation for reputational harm.",
    penalty: "Damages and possible injunction against further publication",
  },
  {
    id: 55,
    category: "Civil",
    issue_example: "Wrongful eviction",
    rights_explained:
      "If you are evicted from your residence without proper legal procedure, your right to secure housing enables you to challenge the eviction in court. Preserve leases, notices, and related correspondence to support your claim for either reclaiming your home or receiving compensation for any damages incurred. If you are evicted from your residence without proper legal procedure, your right to secure housing enables you to challenge the eviction in court. Preserve leases, notices, and related correspondence to support your claim for either reclaiming your home or receiving compensation for any damages incurred.",
    penalty:
      "Fines on landlords, compensation awards, or potential criminal action",
  },
  {
    id: 56,
    category: "Civil",
    issue_example: "Animal cruelty",
    rights_explained:
      "If you witness abuse or severe mistreatment of animals, your right to humane treatment obliges you to report the matter to animal welfare organizations and law enforcement. Document the abuse with photos or videos to ensure that investigations lead to penalties for the offender and protection for the animals. If you witness abuse or severe mistreatment of animals, your right to humane treatment obliges you to report the matter to animal welfare organizations and law enforcement. Document the abuse with photos or videos to ensure that investigations lead to penalties for the offender and protection for the animals.",
    penalty: "Fines, imprisonment, or prohibition from owning animals",
  },
  {
    id: 57,
    category: "Civil",
    issue_example: "Attempted murder",
    rights_explained:
      "If someone attempts to take your life, your right to self-defense and protection of life allows you to seek immediate help. Call emergency services, document injuries and circumstances, and file charges so that the full force of the law can be brought to bear against the offender. If someone attempts to take your life, your right to self-defense and protection of life allows you to seek immediate help. Call emergency services, document injuries and circumstances, and file charges so that the full force of the law can be brought to bear against the offender.",
    penalty: "Severe criminal sentencing, potentially life imprisonment",
  },
  {
    id: 58,
    category: "Civil",
    issue_example: "Extortion",
    rights_explained:
      "If you are threatened with harm unless you pay money or provide services, your right to security and property allows you to record the threat and report it to law enforcement immediately. Preserving all evidence (texts, calls) is critical in ensuring that the extortionist is prosecuted. If you are threatened with harm unless you pay money or provide services, your right to security and property allows you to record the threat and report it to law enforcement immediately. Preserving all evidence (texts, calls) is critical in ensuring that the extortionist is prosecuted.",
    penalty: "Imprisonment, fines, and restraining orders",
  },
  {
    id: 59,
    category: "Civil",
    issue_example: "Blackmail",
    rights_explained:
      "If someone uses damaging information against you to force you to pay or comply with demands, your legal rights empower you to document the threats and report them to law enforcement without delay. This action is key to protecting your privacy and personal security. If someone uses damaging information against you to force you to pay or comply with demands, your legal rights empower you to document the threats and report them to law enforcement without delay. This action is key to protecting your privacy and personal security.",
    penalty: "Imprisonment, fines, and additional charges",
  },
  {
    id: 60,
    category: "Civil",
    issue_example: "Human trafficking",
    rights_explained:
      "If you suspect that an individual or group is engaged in human trafficking or forced labor, your right to freedom compels you to report the abuse immediately to specialized law enforcement agencies. Document any evidence available to assist authorities in dismantling the trafficking network and ensure that victims receive aid and rehabilitation. If you suspect that an individual or group is engaged in human trafficking or forced labor, your right to freedom compels you to report the abuse immediately to specialized law enforcement agencies. Document any evidence available to assist authorities in dismantling the trafficking network and ensure that victims receive aid and rehabilitation.",
    penalty: "Serious felony charges with lengthy imprisonment",
  },
  {
    id: 61,
    category: "Civil",
    issue_example: "Child labor",
    rights_explained:
      "If you observe minors being exploited or forced to work under dangerous conditions, your right to protect children obligates you to report the practice to labor inspectors or child protection agencies. Record details such as work hours, conditions, and employer information to support swift governmental intervention. If you observe minors being exploited or forced to work under dangerous conditions, your right to protect children obligates you to report the practice to labor inspectors or child protection agencies. Record details such as work hours, conditions, and employer information to support swift governmental intervention.",
    penalty: "Substantial fines, imprisonment, and business closures",
  },
  {
    id: 62,
    category: "Civil",
    issue_example: "Forced labor",
    rights_explained:
      "In situations where individuals are compelled to work under threats or without fair compensation, your right to free and fair labor practices empowers you to report the abuse to labor authorities. Secure documentation of working conditions and any coercive behavior to help ensure that the victims are protected and the perpetrators face legal action. In situations where individuals are compelled to work under threats or without fair compensation, your right to free and fair labor practices empowers you to report the abuse to labor authorities. Secure documentation of working conditions and any coercive behavior to help ensure that the victims are protected and the perpetrators face legal action.",
    penalty:
      "Imprisonment for perpetrators and closure of offending businesses",
  },
  {
    id: 63,
    category: "Civil",
    issue_example: "Indecent exposure",
    rights_explained:
      "If someone behaves in a lewd or indecent manner in public spaces, violating community standards, your right to public decency allows you to discreetly document the occurrence and report it to the police. This helps maintain community standards and ensures that the offender faces appropriate legal repercussions. If someone behaves in a lewd or indecent manner in public spaces, violating community standards, your right to public decency allows you to discreetly document the occurrence and report it to the police. This helps maintain community standards and ensures that the offender faces appropriate legal repercussions.",
    penalty: "Fines, possible short-term jail, and offender listing",
  },
  {
    id: 64,
    category: "Civil",
    issue_example: "Public nuisance",
    rights_explained:
      "When excessive noise, pollution, or disruptive activities significantly disturb your local community, your right to a peaceful environment allows you to report these disturbances. Document the incidents with dates and details so that local authorities can enforce noise or nuisance regulations to restore public order. When excessive noise, pollution, or disruptive activities significantly disturb your local community, your right to a peaceful environment allows you to report these disturbances. Document the incidents with dates and details so that local authorities can enforce noise or nuisance regulations to restore public order.",
    penalty: "Fines, abatement orders, or other administrative penalties",
  },
  {
    id: 65,
    category: "Digital",
    issue_example: "Hacking",
    rights_explained:
      "If unauthorized individuals breach your computer system or personal device, your right to digital security empowers you to secure your data, contact cybercrime agencies, and work with forensic experts. Preserve logs and any suspicious activity as evidence to help law enforcement track down the perpetrators. If unauthorized individuals breach your computer system or personal device, your right to digital security empowers you to secure your data, contact cybercrime agencies, and work with forensic experts. Preserve logs and any suspicious activity as evidence to help law enforcement track down the perpetrators.",
    penalty:
      "Up to 3 years’ imprisonment and/or fines (increased for aggravated cases)",
  },
  {
    id: 66,
    category: "Digital",
    issue_example: "Spyware",
    rights_explained:
      "If unauthorized software is installed on your device to monitor your activities, your right to privacy allows you to remove the software immediately and report the intrusion. Use antivirus tools and document any unusual behavior to support a complaint to the proper authorities. If unauthorized software is installed on your device to monitor your activities, your right to privacy allows you to remove the software immediately and report the intrusion. Use antivirus tools and document any unusual behavior to support a complaint to the proper authorities.",
    penalty: "Fines, potential jail term, and compensation to victims",
  },
  {
    id: 67,
    category: "Digital",
    issue_example: "Data privacy breach",
    rights_explained:
      "When a company or entity exposes your personal data without your consent, your right to digital privacy enables you to seek redress. Request a detailed breach report from the organization, preserve evidence of unauthorized access, and report the incident to data protection regulators. When a company or entity exposes your personal data without your consent, your right to digital privacy enables you to seek redress. Request a detailed breach report from the organization, preserve evidence of unauthorized access, and report the incident to data protection regulators.",
    penalty:
      "Heavy regulatory fines, compensation orders, and potential criminal liability",
  },
  {
    id: 68,
    category: "Digital",
    issue_example: "Unauthorized wiretapping",
    rights_explained:
      "If your phone conversations or digital communications are intercepted without a legal warrant, your right to secure communications allows you to document the incident and report it to law enforcement. Consulting legal experts will help ensure that any unlawfully obtained evidence is excluded from court proceedings. If your phone conversations or digital communications are intercepted without a legal warrant, your right to secure communications allows you to document the incident and report it to law enforcement. Consulting legal experts will help ensure that any unlawfully obtained evidence is excluded from court proceedings.",
    penalty: "Criminal penalties, fines, and potential civil damages",
  },
  {
    id: 69,
    category: "Digital",
    issue_example: "Malicious deepfake",
    rights_explained:
      "If manipulated video or audio content is created to harm your reputation, your right to digital authenticity allows you to demand its removal. Preserve the original and manipulated versions, and report the matter to both the hosting platform and law enforcement so that legal action can restore your reputation. If manipulated video or audio content is created to harm your reputation, your right to digital authenticity allows you to demand its removal. Preserve the original and manipulated versions, and report the matter to both the hosting platform and law enforcement so that legal action can restore your reputation.",
    penalty: "Fines, take-down orders, and potential imprisonment",
  },
  {
    id: 70,
    category: "Digital",
    issue_example: "Social engineering scam",
    rights_explained:
      "If you are deceived into providing personal or financial information by someone posing as a credible entity, your right to a secure digital environment empowers you to immediately notify your bank and report the scam to cybercrime agencies. Retain all communication records to support the investigation. If you are deceived into providing personal or financial information by someone posing as a credible entity, your right to a secure digital environment empowers you to immediately notify your bank and report the scam to cybercrime agencies. Retain all communication records to support the investigation.",
    penalty: "Imprisonment and/or fines for the perpetrators",
  },
  {
    id: 71,
    category: "Legal",
    issue_example: "Right to a lawyer denied",
    rights_explained:
      "If you are denied legal representation during a legal proceeding, your right to due process allows you to file an appeal or complaint. Document any instance where you were refused counsel and promptly seek alternative legal support to ensure a fair trial. If you are denied legal representation during a legal proceeding, your right to due process allows you to file an appeal or complaint. Document any instance where you were refused counsel and promptly seek alternative legal support to ensure a fair trial.",
    penalty:
      "Potential mistrial, case dismissal, and disciplinary action against responsible parties",
  },
  {
    id: 72,
    category: "Legal",
    issue_example: "Denied bail",
    rights_explained:
      "If you are unjustly denied bail despite meeting the legal criteria, your right to reasonable pretrial release empowers you to appeal the decision. Engage legal counsel to present evidence that you are not a flight risk or public danger, in hopes of overturning the denial. If you are unjustly denied bail despite meeting the legal criteria, your right to reasonable pretrial release empowers you to appeal the decision. Engage legal counsel to present evidence that you are not a flight risk or public danger, in hopes of overturning the denial.",
    penalty:
      "Wrongful denial may be overturned on appeal; no direct penalty on officials",
  },
  {
    id: 73,
    category: "Legal",
    issue_example: "Wrongful conviction",
    rights_explained:
      "When wrongfully convicted, your right to justice enables you to file appeals, petition for a review of your case, and potentially receive compensation upon exoneration. Retain detailed records of your trial proceedings and work with legal advocates to secure a reexamination of your conviction. When wrongfully convicted, your right to justice enables you to file appeals, petition for a review of your case, and potentially receive compensation upon exoneration. Retain detailed records of your trial proceedings and work with legal advocates to secure a reexamination of your conviction.",
    penalty:
      "Reversal of conviction and possible state compensation for wrongful imprisonment",
  },
  {
    id: 74,
    category: "Legal",
    issue_example: "Illegal search and seizure",
    rights_explained:
      "If law enforcement searches your property without a warrant or probable cause, your right to privacy allows you to challenge the search in court. Gather any evidence that demonstrates the lack of legal justification and file a motion to suppress illegally obtained evidence. If law enforcement searches your property without a warrant or probable cause, your right to privacy allows you to challenge the search in court. Gather any evidence that demonstrates the lack of legal justification and file a motion to suppress illegally obtained evidence.",
    penalty:
      "Exclusion of evidence, case dismissal, and possible disciplinary action against officers",
  },
  {
    id: 75,
    category: "Legal",
    issue_example: "Police brutality",
    rights_explained:
      "If you experience or witness excessive use of force by law enforcement, your right to protection from abuse enables you to report the incident to internal affairs or human rights commissions. Document injuries and collect witness statements to support a civil lawsuit or criminal complaint for accountability. If you experience or witness excessive use of force by law enforcement, your right to protection from abuse enables you to report the incident to internal affairs or human rights commissions. Document injuries and collect witness statements to support a civil lawsuit or criminal complaint for accountability.",
    penalty:
      "Suspension, dismissal, criminal charges, and compensation for damages",
  },
  {
    id: 76,
    category: "Legal",
    issue_example: "Arbitrary arrest",
    rights_explained:
      "If you are detained without proper justification, your right to freedom from arbitrary arrest empowers you to demand immediate legal counsel and challenge your detention. Record the details of the arrest and consult legal experts to seek prompt redress for any violation of your rights. If you are detained without proper justification, your right to freedom from arbitrary arrest empowers you to demand immediate legal counsel and challenge your detention. Record the details of the arrest and consult legal experts to seek prompt redress for any violation of your rights.",
    penalty:
      "Release, compensation claims, and potential disciplinary measures for authorities",
  },
  {
    id: 77,
    category: "Legal",
    issue_example: "Violation of restraining order",
    rights_explained:
      "Should someone violate a protective or restraining order issued in your favor, your right to safety necessitates that you report the breach immediately to law enforcement. Document the violation and notify the court so that swift legal measures can be taken to enforce the order. Should someone violate a protective or restraining order issued in your favor, your right to safety necessitates that you report the breach immediately to law enforcement. Document the violation and notify the court so that swift legal measures can be taken to enforce the order.",
    penalty: "Contempt of court, imprisonment, and additional charges",
  },
  {
    id: 78,
    category: "Legal",
    issue_example: "Perjury",
    rights_explained:
      "If a witness or party lies under oath, your right to a fair trial means that such deception can and should be challenged. Report any instances of perjury, providing transcripts or recordings as evidence to help restore the integrity of legal proceedings. If a witness or party lies under oath, your right to a fair trial means that such deception can and should be challenged. Report any instances of perjury, providing transcripts or recordings as evidence to help restore the integrity of legal proceedings.",
    penalty: "Imprisonment, fines, or both",
  },
  {
    id: 79,
    category: "Legal",
    issue_example: "Judicial corruption",
    rights_explained:
      "If you notice bias, unfair practices, or corruption within the judiciary, your right to a transparent judicial system empowers you to report these issues to oversight bodies or anti-corruption commissions. Provide concrete evidence to help ensure that ethical legal practices are maintained and that any misconduct is addressed. If you notice bias, unfair practices, or corruption within the judiciary, your right to a transparent judicial system empowers you to report these issues to oversight bodies or anti-corruption commissions. Provide concrete evidence to help ensure that ethical legal practices are maintained and that any misconduct is addressed.",
    penalty:
      "Removal from the bench, criminal charges, or disciplinary actions",
  },
  {
    id: 80,
    category: "Legal",
    issue_example: "Organized crime",
    rights_explained:
      "If criminal groups threaten your safety or property, your right to live securely empowers you to report the activity to specialized law enforcement units. Detailed and documented evidence is critical to initiate witness protection programs and dismantle these criminal networks. If criminal groups threaten your safety or property, your right to live securely empowers you to report the activity to specialized law enforcement units. Detailed and documented evidence is critical to initiate witness protection programs and dismantle these criminal networks.",
    penalty: "Harsh prison sentences, asset seizures, and heavy fines",
  },
  {
    id: 81,
    category: "Economic",
    issue_example: "Non-payment of alimony",
    rights_explained:
      "If court-ordered spousal or child support is not being paid, your right to financial support enables you to file an enforcement motion. Maintain detailed records of payment obligations and missed payments to prompt wage garnishment or other legal measures to recover the owed support. If court-ordered spousal or child support is not being paid, your right to financial support enables you to file an enforcement motion. Maintain detailed records of payment obligations and missed payments to prompt wage garnishment or other legal measures to recover the owed support.",
    penalty:
      "Wage garnishment, fines, and possible jail time for repeated non-compliance",
  },
  {
    id: 82,
    category: "Economic",
    issue_example: "Tax evasion",
    rights_explained:
      "If you have evidence of deliberate tax evasion through unreported income or fraudulent declarations, your right to a fair tax system allows you to report the wrongdoing to tax authorities. Compile detailed financial records and transaction histories to assist auditors in tracing and prosecuting the fraudulent activities. If you have evidence of deliberate tax evasion through unreported income or fraudulent declarations, your right to a fair tax system allows you to report the wrongdoing to tax authorities. Compile detailed financial records and transaction histories to assist auditors in tracing and prosecuting the fraudulent activities.",
    penalty: "Substantial fines, penalties, and possible prison terms",
  },
  {
    id: 83,
    category: "Economic",
    issue_example: "Financial extortion",
    rights_explained:
      "If someone threatens you for money or favors under duress, your right to economic security enables you to record the incident and report it immediately to law enforcement. Retain all evidence of the extortion attempt in order to support the investigation and secure protective measures. If someone threatens you for money or favors under duress, your right to economic security enables you to record the incident and report it immediately to law enforcement. Retain all evidence of the extortion attempt in order to support the investigation and secure protective measures.",
    penalty: "Imprisonment, fines, and compensation orders for victims",
  },
  {
    id: 84,
    category: "Economic",
    issue_example: "Property damage",
    rights_explained:
      "When someone deliberately defaces or destroys your property, your right to secure ownership allows you to file a police report and pursue legal action for repairs and restitution. Document the damage thoroughly with photographs, repair estimates, and witness statements to support your claim. When someone deliberately defaces or destroys your property, your right to secure ownership allows you to file a police report and pursue legal action for repairs and restitution. Document the damage thoroughly with photographs, repair estimates, and witness statements to support your claim.",
    penalty:
      "Compensation for damages, fines, or imprisonment depending on severity",
  },
  {
    id: 85,
    category: "Economic",
    issue_example: "Bankruptcy fraud",
    rights_explained:
      "If you suspect that fraudulent activities are occurring in a bankruptcy proceeding—such as the concealment of assets—your right to fair financial practices enables creditors or relevant parties to report the fraud. Document all discrepancies carefully and collaborate with insolvency courts to ensure hidden assets are recovered. If you suspect that fraudulent activities are occurring in a bankruptcy proceeding—such as the concealment of assets—your right to fair financial practices enables creditors or relevant parties to report the fraud. Document all discrepancies carefully and collaborate with insolvency courts to ensure hidden assets are recovered.",
    penalty: "Significant penalties, fines, and potential imprisonment",
  },
  {
    id: 86,
    category: "Economic",
    issue_example: "Credit card fraud",
    rights_explained:
      "If unauthorized transactions appear on your credit card statement, your right to secure financial services empowers you to report the incident immediately to your bank and file a police report. Retain all transaction records to support the investigation and to ensure that the perpetrator is prosecuted. If unauthorized transactions appear on your credit card statement, your right to secure financial services empowers you to report the incident immediately to your bank and file a police report. Retain all transaction records to support the investigation and to ensure that the perpetrator is prosecuted.",
    penalty: "Fines, imprisonment, and restitution orders",
  },
  {
    id: 87,
    category: "Economic",
    issue_example: "Insider trading",
    rights_explained:
      "If you witness stock trading based on confidential or undisclosed information, your right to market integrity compels you to report the activity to securities regulators. Document all relevant details, including transaction dates and involved parties, to support an investigation aimed at maintaining a fair trading environment. If you witness stock trading based on confidential or undisclosed information, your right to market integrity compels you to report the activity to securities regulators. Document all relevant details, including transaction dates and involved parties, to support an investigation aimed at maintaining a fair trading environment.",
    penalty:
      "Severe fines, trading bans, and imprisonment for serious offenses",
  },
  {
    id: 88,
    category: "Economic",
    issue_example: "Price gouging",
    rights_explained:
      "During emergencies or shortages, if you notice exploitative price hikes on essential goods, your right to fair consumer practices enables you to report this conduct to consumer protection authorities. Keep records of the price increases and dates to support regulatory action aimed at protecting consumers. During emergencies or shortages, if you notice exploitative price hikes on essential goods, your right to fair consumer practices enables you to report this conduct to consumer protection authorities. Keep records of the price increases and dates to support regulatory action aimed at protecting consumers.",
    penalty: "Fines, license suspensions, or criminal charges",
  },
  {
    id: 89,
    category: "Economic",
    issue_example: "Utility theft",
    rights_explained:
      "If you suspect that someone is tampering with utility meters or illegally siphoning services, your right to fair commerce allows you to report the tampering to both the utility company and law enforcement. Document any unusual readings or physical tampering for a prompt investigation. If you suspect that someone is tampering with utility meters or illegally siphoning services, your right to fair commerce allows you to report the tampering to both the utility company and law enforcement. Document any unusual readings or physical tampering for a prompt investigation.",
    penalty: "Fines, arrest, and back-billing for stolen utilities",
  },
  {
    id: 90,
    category: "Economic",
    issue_example: "Embezzlement",
    rights_explained:
      "When funds are misappropriated by someone in a position of trust, your right to transparent financial management allows you to report the misconduct. Collect financial records, emails, and transaction logs to support legal action aimed at recovering the stolen funds and punishing the offender. When funds are misappropriated by someone in a position of trust, your right to transparent financial management allows you to report the misconduct. Collect financial records, emails, and transaction logs to support legal action aimed at recovering the stolen funds and punishing the offender.",
    penalty:
      "Prison terms, fines, and restitution to the affected organization",
  },
  {
    id: 91,
    category: "Environmental",
    issue_example: "Littering",
    rights_explained:
      "If you notice repeated or substantial littering in your area, your right to a clean environment empowers you to report it to local municipal authorities. Document the scale and frequency of the violation with photographs, prompting enforcement of cleanup orders or other remedial measures. If you notice repeated or substantial littering in your area, your right to a clean environment empowers you to report it to local municipal authorities. Document the scale and frequency of the violation with photographs, prompting enforcement of cleanup orders or other remedial measures.",
    penalty: "Fines, community service, or stricter administrative penalties",
  },
  {
    id: 92,
    category: "Environmental",
    issue_example: "Poaching",
    rights_explained:
      "When illegal hunting or capturing of protected species occurs, your right to biodiversity conservation enables you to report such activities to wildlife protection agencies. Gather evidence such as photos or videos to support an investigation that protects endangered species and their habitats. When illegal hunting or capturing of protected species occurs, your right to biodiversity conservation enables you to report such activities to wildlife protection agencies. Gather evidence such as photos or videos to support an investigation that protects endangered species and their habitats.",
    penalty: "Large fines, imprisonment, and equipment seizure",
  },
  {
    id: 93,
    category: "Environmental",
    issue_example: "Marine pollution",
    rights_explained:
      "If you witness oil spills or dumping of waste into bodies of water, your right to a healthy environment obligates you to document the incident and notify maritime authorities or the coast guard. Detailed evidence helps initiate cleanup processes and hold polluters accountable. If you witness oil spills or dumping of waste into bodies of water, your right to a healthy environment obligates you to document the incident and notify maritime authorities or the coast guard. Detailed evidence helps initiate cleanup processes and hold polluters accountable.",
    penalty: "Heavy fines, operational bans, and criminal charges",
  },
  {
    id: 94,
    category: "Environmental",
    issue_example: "Mining without permit",
    rights_explained:
      "When you observe mining or sand dredging being carried out without the necessary environmental permits, your right to environmental protection allows you to report the illegal activity. Record precise location details and photographic evidence to prompt inspections and halt the operation. When you observe mining or sand dredging being carried out without the necessary environmental permits, your right to environmental protection allows you to report the illegal activity. Record precise location details and photographic evidence to prompt inspections and halt the operation.",
    penalty: "Closure of operations, fines, and possible imprisonment",
  },
  {
    id: 95,
    category: "Environmental",
    issue_example: "Hazardous waste dumping",
    rights_explained:
      "If toxic or hazardous materials are being discarded unlawfully, your right to public safety and environmental integrity empowers you to alert environmental agencies immediately. Document the type, location, and time of dumping to ensure that cleanup orders are enforced and responsible parties are penalized. If toxic or hazardous materials are being discarded unlawfully, your right to public safety and environmental integrity empowers you to alert environmental agencies immediately. Document the type, location, and time of dumping to ensure that cleanup orders are enforced and responsible parties are penalized.",
    penalty: "Criminal liability, fines, and enforced cleanup mandates",
  },
  {
    id: 96,
    category: "Social",
    issue_example: "Age discrimination",
    rights_explained:
      "If you are denied employment or services solely because of your age, your right to equal opportunity allows you to file a complaint with anti-discrimination agencies. Collect evidence such as discriminatory communications or statistical data to support your claim and prompt policy changes. If you are denied employment or services solely because of your age, your right to equal opportunity allows you to file a complaint with anti-discrimination agencies. Collect evidence such as discriminatory communications or statistical data to support your claim and prompt policy changes.",
    penalty: "Compensation, policy changes, and fines for the offenders",
  },
  {
    id: 97,
    category: "Social",
    issue_example: "Refugee discrimination",
    rights_explained:
      "If you or a refugee is treated unfairly or denied essential services due to refugee status, your right to humane treatment requires that you report the incident to human rights commissions or NGOs. Document the mistreatment and seek legal assistance to ensure proper redress. If you or a refugee is treated unfairly or denied essential services due to refugee status, your right to humane treatment requires that you report the incident to human rights commissions or NGOs. Document the mistreatment and seek legal assistance to ensure proper redress.",
    penalty: "Potential sanctions, legal redress, or compensation",
  },
  {
    id: 98,
    category: "Social",
    issue_example: "Child sexual abuse material",
    rights_explained:
      "If you come across any materials depicting the sexual abuse of minors, your obligation to protect children compels you to report it immediately to law enforcement or specialized hotlines—even anonymously. Detailed reporting is essential to prevent further abuse and to secure the prosecution of those responsible. If you come across any materials depicting the sexual abuse of minors, your obligation to protect children compels you to report it immediately to law enforcement or specialized hotlines—even anonymously. Detailed reporting is essential to prevent further abuse and to secure the prosecution of those responsible.",
    penalty: "Severe imprisonment, sex offender registration, and heavy fines",
  },
  {
    id: 99,
    category: "Social",
    issue_example: "Forced child labor",
    rights_explained:
      "If you witness minors employed in hazardous or exploitative conditions, your right to child protection empowers you to report the situation to labor inspectors or child protection agencies. Gather detailed information such as work conditions, employer data, and hours worked to prompt swift governmental intervention. If you witness minors employed in hazardous or exploitative conditions, your right to child protection empowers you to report the situation to labor inspectors or child protection agencies. Gather detailed information such as work conditions, employer data, and hours worked to prompt swift governmental intervention.",
    penalty: "Large fines, imprisonment, and closure of the enterprise",
  },
  {
    id: 100,
    category: "Digital",
    issue_example: "Sexual exploitation in workplaces",
    rights_explained:
      "If you are coerced or forced into unwanted sexual activities in exchange for job retention or benefits, your right to a safe workplace obligates you to report the incident immediately to law enforcement or labor boards. Document communications, emails, or other evidence to ensure that the perpetrator is prosecuted and that you receive the necessary support and protection. If you are coerced or forced into unwanted sexual activities in exchange for job retention or benefits, your right to a safe workplace obligates you to report the incident immediately to law enforcement or labor boards. Document communications, emails, or other evidence to ensure that the perpetrator is prosecuted and that you receive the necessary support and protection.",
    penalty:
      "Fines, imprisonment, and possible revocation of workplace licenses",
  },
];

export default rules;
