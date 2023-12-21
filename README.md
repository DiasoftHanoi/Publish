
####
log4j.logger.ru.diasoft.services.ftfloanws=DEBUG,ftfloanfile
log4j.logger.ru.diasoft.flextera.services.ftfloanws=DEBUG,ftfloanfile
log4j.appender.ftfloanfile=org.apache.log4j.RollingFileAppender
log4j.appender.ftfloanfile.file=${logdirplatform}/ftfloanws.log
log4j.appender.ftfloanfile.MaxFileSize=10MB
log4j.appender.ftfloanfile.MaxBackupIndex=1
log4j.appender.ftfloanfile.layout=org.apache.log4j.PatternLayout
log4j.appender.ftfloanfile.layout.ConversionPattern=%d [%t] %-5p (%F:%L) - %m%n
